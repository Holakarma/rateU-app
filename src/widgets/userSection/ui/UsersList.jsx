import React, { useContext } from 'react';
import {
	ShowEmployee
} from 'widgets/userSection/ui/ShowEmployee';
import { useRates } from 'entities/rate';
import {
	EmployeesContext
} from 'shared/model/EmployeesContext';
import {
	CriterionContext
} from 'shared/model/CriterionContext';
import { useRights } from 'entities/user';

const UsersList = () => {
	const { rates, isLoading } = useRates();
	const { rights } = useRights();

	const { employees } = useContext(EmployeesContext);
	const { criteria } = useContext(CriterionContext);

	if (isLoading) {
		return (
			<div
				className="containerLoader align-baseline justify-content-start h-auto"
			>
				<div className="loader"></div>
			</div>
		);
	}

	if (!employees || !rates) return null;

	return (
		employees.map(( employee ) => (
			<ShowEmployee
				key={employee.id}
				employee={employee}
				selectedCriteria={criteria}
				rights={rights}
			/>
		))
	);
};

export default UsersList;