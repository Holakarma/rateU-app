import { getSectionId } from './createEntity';

export const getCriteria = (function createSavedCriteria(savedCriteria = []) {
    return function (refresh = false, getInactive = false) {
        return new Promise(async (resolve) => {
            if (refresh) {
                savedCriteria = [];
            }
            if (savedCriteria.length > 0) {
                resolve(savedCriteria);
                return;
            }
            const sectionId = (await getSectionId()).criteriaSection;
            const queryParams = getInactive
                ? {
                      ENTITY: 'rates',
                      FILTER: {
                          SECTION: sectionId,
                      },
                  }
                : {
                      ENTITY: 'rates',
                      FILTER: {
                          ACTIVE: 'Y',
                          SECTION: sectionId,
                      },
                  };
            let resultArray = [];
            BX24.callMethod('entity.item.get', queryParams, (res) => {
                resultArray = resultArray.concat(res.data());
                if (res.more()) {
                    res.next();
                    return;
                }
                savedCriteria = resultArray;
                resolve(savedCriteria);
            });
        });
    };
})();
