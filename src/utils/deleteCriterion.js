import { getSectionId } from './createEntity';

function callDeleteMethod(id, resolve) {
    BX24.callMethod(
        'entity.item.delete',
        {
            ENTITY: 'rates',
            ID: id,
        },
        (res) => {
            resolve(res);
        },
    );
}

export default function deleteCriterion(id) {
    if (!id) return;
    return new Promise(async (resolve) => {
        const sectionId = (await getSectionId()).ratesSection;
        let resultArray = [];
        BX24.callMethod(
            'entity.item.get',
            { ENTITY: 'rates', FILTER: { SECTION: sectionId } },
            (res) => {
                resultArray = resultArray.concat(res.data());
                if (res.more()) {
                    res.next();
                    return;
                }
                let deleteRatesBatch = resultArray
                    .filter(
                        (resultRate) =>
                            resultRate.PROPERTY_VALUES.CRITERION_ID === id,
                    );
                if (deleteRatesBatch.length) {
                    deleteRatesBatch = deleteRatesBatch.map((deleteRate) => [
                        'entity.item.delete',
                        { ENTITY: 'rates', ID: deleteRate.ID },
                    ]);
                    BX24.callBatch(deleteRatesBatch, (res) => {
                        callDeleteMethod(id, resolve);
                    });
                } else {
                    callDeleteMethod(id, resolve);
                }
            },
        );
    });
}
