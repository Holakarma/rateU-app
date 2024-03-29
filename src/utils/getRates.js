import { getSectionId } from './createEntity';

export const getRates = (function createSavedCriteria(savedRates = []) {
    return function (refresh = false, period = {dateBegin: null, dateEnd: null}) {
        return new Promise(async (resolve) => {
            if (refresh) {
                savedRates = [];
            }
            if (savedRates.length > 0) {
                resolve(savedRates);
                return;
            }
            const sectionId = (await getSectionId()).ratesSection;
            let resultArray = [];
            BX24.callMethod(
                'entity.item.get',
                {
                    ENTITY: 'rates',
                    FILTER: {
                        SECTION: sectionId,
                        '>=TIMESTAMP_X': period.dateBegin,
                        '<TIMESTAMP_X': period.dateEnd,
                    }
                },
                (res) => {
                    resultArray = resultArray.concat(res.data());
                    if (res.more()) {
                        res.next();
                        return;
                    }
                    savedRates = resultArray;
                    resolve(savedRates);
                },
            );
        });
    };
})();
