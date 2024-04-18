import { getSectionId } from './createEntity';

export const getCriteria = (function createSavedCriteria(savedCriteria = []) {
    return function (refresh = false, getInactive = false) {
        return new Promise(async (resolve, reject) => {
            if (refresh) {
                savedCriteria = [];
            }
            if (savedCriteria.length > 0) {
                if (getInactive) {
                    resolve(savedCriteria);
                } else resolve(filterInactive(savedCriteria));
                return;
            }
            const sectionId = (
                await getSectionId().catch((e) => {
                    reject(e);
                    return;
                })
            ).criteriaSection;
            let resultArray = [];
            BX24.callMethod(
                'entity.item.get',
                {
                    ENTITY: 'rates',
                    FILTER: {
                        SECTION: sectionId,
                    },
                },
                (res) => {
                    if (res.error()) {
                        reject(new Error(res.error().ex.error_description));
                        return;
                    }
                    resultArray = resultArray.concat(res.data());
                    if (res.more()) {
                        res.next();
                        return;
                    }
                    savedCriteria = resultArray;
                    if (!getInactive) {
                        resultArray = filterInactive(resultArray);
                    }
                    resolve(resultArray);
                },
            );
        });
    };
})();

function filterInactive(array) {
    return array.filter((item) => item.ACTIVE === 'Y');
}
