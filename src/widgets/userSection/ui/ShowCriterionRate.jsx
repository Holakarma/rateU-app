import React from 'react';
import { useAverageRates } from 'entities/rate';
import round from 'shared/utilities/round';

export function ShowCriterionRate( {
									   criterion,
									   employee
								   } ) {
	const { aliasedRates } = useAverageRates();

	return aliasedRates ? (
		<li className="list-group-item">
			{criterion.NAME}:
			{aliasedRates[employee.id][criterion.ID] === -1 ? (
				<i className="opacity-50 ms-1">
					Нет оценок
				</i>
			) : (
				<span className="ms-1">
                    <span
						className={`${aliasedRates[employee.id][criterion.ID] < 2 ? 'text-danger' : ''} ${
							aliasedRates[employee.id][criterion.ID] > 7 ? 'text-success' : ''
						}`}
					>
                        {round(aliasedRates[employee.id][criterion.ID], 2)}
                    </span>
                    <span
						className={`opacity-50`}
					>/10</span>
                </span>
			)}
		</li>
	) : null;
}
