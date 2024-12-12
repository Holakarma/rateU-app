import style
	from 'widgets/userSection/ui/userSection.module.css';
import cls from './RatesTable.module.css';
import React, { useContext } from 'react';
import RateRow from './RateRow';
import {
	CriterionContext
} from 'shared/context/criterionContext/CriterionContext';

const RatesTable = ( {
						 employees,
						 rights
					 } ) => {
	const {
		criteria
	} = useContext(CriterionContext);

	if (!employees.length || !criteria.length) return null;

	return (
		<div
			className={`${style.card} overflow-x-auto card mb-4`}
			style={{ padding: '10px' }}>
			<h4>Таблица критериев по
				выбранным сотрудникам</h4>
			<table
				className={`${cls.table} table table-striped`}>
				<thead>
				<tr>
					<th scope="col">Имя</th>
					{
						criteria.map(criterion => (
							<th scope="col"
								key={criterion.ID}>{criterion.NAME}</th>
						))
					}
				</tr>
				</thead>
				<tbody>
				{employees.map(employee => (
					<tr key={employee.id}>
						<th scope="row">{employee.name}</th>
						<RateRow
							rights={rights}
							employee={employee}
						/>
					</tr>
				))}
				</tbody>
			</table>
		</div>
	);
};

export default RatesTable;
