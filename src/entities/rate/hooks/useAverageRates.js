import { useRates } from 'entities/rate';
import { useContext, useEffect, useState } from 'react';
import {
	CriterionContext
} from 'shared/context/criterionContext/CriterionContext';
import {
	EmployeesContext
} from 'shared/context/employeesContext/EmployeesContext';
import getAverage from 'shared/utilities/getAverage';

const useAverageRates = () => {
	const { rates } = useRates();
	const { criteria } = useContext(CriterionContext);
	const { employees } = useContext(EmployeesContext);

	const [ aliasedRates, setAliasedRates ] = useState(null);

	useEffect(() => {
		if (!rates || !employees?.length || !criteria?.length) return;
		const aliases = {};

		employees.forEach(( e ) => {
			const employeesRates = rates.filter(rate => (
				rate.PROPERTY_VALUES.USER_ID === e.id
			));
			const alias = criteria.map(( criterion ) => [ criterion.ID, calculateAverageRate(employeesRates, criterion) ]);
			Object.assign(aliases, {
				[e.id]: Object.fromEntries(new Map(alias))
			});
		});

		setAliasedRates(aliases);
	}, [ employees, rates, criteria ]);

	const calculateAverageRate = ( rates, criterion ) => {
		const filteredRates = filterByCriterion(rates, criterion);
		const average = getAverage(filteredRates.map(r => parseInt(r.PROPERTY_VALUES.RATE)));
		return isNaN(average) ? -1 : average;
	};

	const filterByCriterion = ( rates, criterion ) => rates.filter(rate => rate.PROPERTY_VALUES.CRITERION_ID === criterion.ID);

	return { aliasedRates };
};

export default useAverageRates;
