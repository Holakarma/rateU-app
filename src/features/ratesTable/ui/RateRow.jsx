import useAccessRights
	from 'entities/user/hooks/useAccessRights';
import { useAverageRates } from 'entities/rate';
import React, { useContext } from 'react';
import {
	CriterionContext
} from 'shared/model/CriterionContext';
import round from 'shared/utilities/round';

const RateRow = ( {
					  rights,
					  employee
				  } ) => {

	const { criteria } = useContext(CriterionContext);
	const haveAccess = useAccessRights(rights, employee);
	const { aliasedRates } = useAverageRates();

	if (!aliasedRates) return null;

	if (haveAccess === null) {
		return <td
			colSpan={criteria.length}>Загрузка...</td>;
	}

	if (!haveAccess) {
		return <td
			colSpan={criteria.length}>Недостаточно
			прав</td>;
	}

	return criteria.map(criterion => (
			<td
				key={criterion.ID}
			>
				{
					aliasedRates[employee.id][criterion.ID] === -1
						?
						<small className="opacity-50">
							нет оценок
						</small>
						:
						round(aliasedRates[employee.id][criterion.ID], 1)
				}
			</td>
		)
	);
};

export default RateRow;