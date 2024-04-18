import { getSectionId } from './createEntity';
import { getCriteria } from './getCriteria';

function findRate(where, what) {
    return where.find(
        (r) =>
            r.PROPERTY_VALUES.TASK_ID == what.task &&
            r.PROPERTY_VALUES.USER_ID == what.user &&
            r.PROPERTY_VALUES.CRITERION_ID == what.criterion,
    );
}

export const getRates = (function (savedRates = []) {
    return function (rates, taskId) {
        return new Promise(async (resolve, reject) => {
            if (!rates && !taskId && savedRates.length) {
                resolve(savedRates);
                return;
            }
            const sectionId = (await getSectionId().catch((e) => reject(e)))
                .ratesSection;
            let resultArray = [];
            BX24.callMethod(
                'entity.item.get',
                {
                    ENTITY: 'rates',
                    FILTER: {
                        SECTION: sectionId,
                    },
                },
                async (res) => {
                    if (res?.error()) {
                        reject(new Error(res?.error().ex.error_description));
                        return;
                    }
                    resultArray = resultArray.concat(res.data());
                    if (res.more()) {
                        res.next();
                        return;
                    }
                    let activeCriteriaList = await getCriteria().catch((e) =>
                        reject(e),
                    );
                    activeCriteriaList = activeCriteriaList.map(
                        (activeCriterion) => activeCriterion?.ID,
                    );

                    if (taskId) {
                        resultArray = resultArray.filter(
                            (r) =>
                                r.PROPERTY_VALUES.TASK_ID == taskId &&
                                activeCriteriaList.includes(
                                    r.PROPERTY_VALUES.CRITERION_ID,
                                ),
                        );
                    }
                    if (!rates) {
                        savedRates = resultArray;
                        resolve(resultArray);
                        return;
                    }
                    if (rates && taskId) {
                        rates = rates.filter((r) => r.task == taskId);
                    }

                    let addBatch = [];
                    let similar;
                    rates.forEach((rate) => {
                        similar = findRate(resultArray, rate);
                        if (similar) {
                            if (
                                similar.PROPERTY_VALUES.COMMENT !== rate.comm ||
                                similar.PROPERTY_VALUES.RATE !== rate.rate
                            ) {
                                addBatch.push([
                                    'entity.item.update',
                                    {
                                        ENTITY: 'rates',
                                        ID: similar.ID,
                                        PROPERTY_VALUES: {
                                            COMMENT: rate.comm,
                                            RATE: parseInt(rate.rate),
                                        },
                                    },
                                ]);
                            }
                        } else {
                            addBatch.push([
                                'entity.item.add',
                                {
                                    ENTITY: 'rates',
                                    NAME: `rate${rate.task}-${rate.user}-${rate.criterion}`,
                                    PROPERTY_VALUES: {
                                        TASK_ID: parseInt(rate.task),
                                        USER_ID: parseInt(rate.user),
                                        CRITERION_ID: parseInt(rate.criterion),
                                        COMMENT: rate.comm,
                                        RATE: parseInt(rate.rate),
                                    },
                                    SECTION: sectionId,
                                },
                            ]);
                        }
                    });
                    resultArray.forEach((fetchedRate) => {
                        if (
                            !rates.some(
                                (r) =>
                                    r.task ===
                                        fetchedRate.PROPERTY_VALUES.TASK_ID &&
                                    r.user ===
                                        fetchedRate.PROPERTY_VALUES.USER_ID &&
                                    r.criterion ===
                                        fetchedRate.PROPERTY_VALUES
                                            .CRITERION_ID,
                            )
                        ) {
                            addBatch.push([
                                'entity.item.delete',
                                { ENTITY: 'rates', ID: fetchedRate.ID },
                            ]);
                        }
                    });
                    if (addBatch.length) {
                        BX24.callBatch(addBatch, (res) => {
                            res.forEach((r) => {
                                if (r?.error()) {
                                    reject(
                                        new Error(
                                            r?.error().ex.error_description,
                                        ),
                                    );
                                    return;
                                }
                            });
                            resolve(res);
                        });
                    } else {
                        resolve(resultArray);
                    }
                },
            );
        });
    };
})();
