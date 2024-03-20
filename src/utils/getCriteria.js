import { getSectionId } from './createEntity';

export const getCriteria = (function createSavedCriteria(savedCriteria = []) {
    return function (refresh = false) {
        return new Promise(async (resolve) => {
            if (refresh) {
                savedCriteria = [];
            }
            if (savedCriteria.length > 0) {
                resolve(savedCriteria);
                return;
            }
            const sectionId = (await getSectionId()).criteriaSection;
            BX24.callMethod(
                'entity.item.get',
                {
                    ENTITY: 'rates',
                    FILTER: {
                        // 'SECTION': sectionId
                    }
                },
                (res) => {
                    console.log(res.data())
                    savedCriteria = res.data();
                    resolve(savedCriteria);
                },
            );
        });
    };
})();
