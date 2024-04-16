import { getSectionId } from './createEntity';

export const getRates = (function createSavedCriteria(savedRates = []) {
    return function (refresh = false, period) {
        return new Promise(async (resolve, reject) => {
            if (refresh) {
                savedRates = [];
            }
            if (savedRates.length > 0) {
                let answer = [...savedRates];
                if (period) {
                    answer = filterByPeriod(answer, period);
                }
                resolve(answer);
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
                    savedRates = resultArray;
                    if (period) {
                        resultArray = filterByPeriod(resultArray, period);
                    }
                    resolve(resultArray);
                },
            );
        });
    };
})();

function filterByPeriod(array, period) {
    return array.filter(
        (rate) =>
            new Date(rate.DATE_CREATE) >= new Date(period.dateBegin) &&
            new Date(rate.DATE_CREATE) < new Date(period.dateEnd || new Date()),
    );
}
