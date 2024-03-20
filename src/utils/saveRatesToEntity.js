import { getSectionId } from './createEntity';

// BX24.callMethod('entity.delete', {ENTITY: 'rates'}, res => {
//     console.log(res)
// })

export const getRates = (function (savedRates = []) {
    return function (rates) {
        return new Promise(async (resolve) => {
            if (!rates || rates?.length) resolve(savedRates);
            const sectionId = (await getSectionId()).ratesSection;
            BX24.callMethod(
                'entity.item.get',
                { ENTITY: 'rates', FILTER: { SECTION: sectionId } },
                (res) => {
                    if (res.data().length) {
                    } else {
                        let needToAdd = [];
                        rates.forEach((rate) => {
                            needToAdd.push([
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
                        });
                        // BX24.callBatch(needToAdd, res => {console.log(res)})
                        BX24.callMethod(
                            'entity.item.get',
                            { ENTITY: 'rates' },
                            (res) => {
                                console.log(res);
                            },
                        );
                    }
                },
            );
        });
    };
})();
