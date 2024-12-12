import React, { useContext, useEffect } from 'react';
import {
	CriterionContext
} from 'shared/context/criterionContext/CriterionContext';
import {
	EmployeesContext
} from 'shared/context/employeesContext/EmployeesContext';
import { useRights, UserSelect } from 'entities/user';
import {
	ChooseCriteria,
	useCriteria
} from 'entities/criterion';
import UsersList from 'widgets/userSection/ui/UsersList';
import { AllHistoryModalBtn } from 'features/ratesHistory';
import { Matrix } from 'features/ratesMatrix';
import { RatesTable } from 'features/ratesTable';
import { PeriodPicker } from 'entities/period';

const UserSection = () => {
	const { employees } = useContext(EmployeesContext);
	const { rights } = useRights();

	const {
		criteria: selectedCriteria,
		setCriteria: setSelectedCriteria
	} = useContext(CriterionContext);

	const { criteria } = useCriteria();

	useEffect(() => {
		if (!criteria) return;
		setSelectedCriteria(criteria);
	}, [ criteria ]);

	return (
		<div>
			<div
				className="d-flex justify-content-between mt-4 mb-2">
				<h3>Оценка
					сотрудников <AllHistoryModalBtn /></h3>
				<div
					className="g-3 d-flex row justify-content-end">
					<UserSelect />
					<ChooseCriteria
						criteria={criteria}
						setSelectedCriteria={setSelectedCriteria}
					/>
				</div>
			</div>
			<PeriodPicker />
			<div className="mt-2 row g-3 mb-4">
				<UsersList />
			</div>
			{
				employees.length && selectedCriteria.length ?
					<>
						<RatesTable
							employees={employees}
							rights={rights}
						/>
						<Matrix
							employees={employees}
							selectedCriteria={selectedCriteria}
							rights={rights}
						/>
					</> : null
			}
		</div>
	);
};


export default UserSection;
