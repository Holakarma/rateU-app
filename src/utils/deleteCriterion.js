import { getSectionId } from './createEntity';
import { getRates } from './getRates';

function callDeleteMethod(id, resolve, reject) {
    BX24.callMethod(
        'entity.item.delete',
        {
            ENTITY: 'rates',
            ID: id,
        },
        (res) => {
            if (res?.error()) {
                reject(new Error(res.error().ex.error_description));
                return;
            }
            resolve(res);
        },
    );
}

export default function deleteCriterion(id) {
    if (!id) return;
    return new Promise(async (resolve, reject) => {
        const sectionId = (await getSectionId().catch((e) => reject(e)))
            .ratesSection;
        let resultArray = await getRates(true).catch((e) => reject(e));
        let deleteRatesBatch = resultArray.filter(
            (resultRate) => resultRate.PROPERTY_VALUES.CRITERION_ID === id,
        );
        if (deleteRatesBatch.length) {
            deleteRatesBatch = deleteRatesBatch.map((deleteRate) => [
                'entity.item.delete',
                { ENTITY: 'rates', ID: deleteRate.ID },
            ]);
            console.log(deleteRatesBatch);
            BX24.callBatch(deleteRatesBatch, (res) => {
                res.forEach((r) => {
                    if (r?.error()) {
                        reject(new Error(r.error().ex.error_description));
                        return;
                    }
                });
                callDeleteMethod(id, resolve, reject);
            });
        } else {
            callDeleteMethod(id, resolve, reject);
        }
    });
}
