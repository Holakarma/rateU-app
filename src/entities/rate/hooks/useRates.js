import { useContext, useEffect, useState } from 'react';
import {
	CriterionContext
} from 'shared/model/CriterionContext';
import { getRates } from 'utils/getRates';
import { PeriodContext } from 'shared/model/periodContext';

const useRates = () => {
	const [ rates, setRates ] = useState([]);
	const [ isLoading, setLoading ] = useState(false);

	const { period } = useContext(PeriodContext);

	const { criteria } = useContext(CriterionContext);


	useEffect(() => {
		(async () => {
			setLoading(true);

			const filteredByPeriod = await
				getRates(false, period);
			const filteredByCriteria =
				filteredByPeriod.filter(( rateValue ) => criteria.find(
					( sc ) => rateValue.PROPERTY_VALUES.CRITERION_ID ===
						sc.ID));
			setRates(filteredByCriteria);

			setLoading(false);
		})();
	}, [ period, criteria ]);

	return { rates, isLoading };
};

export default useRates;