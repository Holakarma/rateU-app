import React, { useContext } from 'react';
import {
	EmployeesContext
} from 'shared/context/employeesContext/EmployeesContext';
import { saveEmployees } from 'shared/model/saveToLS';
import cls
	from 'widgets/userSection/ui/userSection.module.css';

function usersModal() {
	return new Promise(( resolve, reject ) => {
		BX24.selectUsers(( res ) => {
			resolve(res);
		});
	});
}

const UserSelect = () => {
	const { setEmployees } = useContext(EmployeesContext);

	async function selectHandler() {
		const selectedEmployees = await usersModal();
		setEmployees([]);
		saveEmployees(selectedEmployees);
		setEmployees(selectedEmployees);
	}

	return (
		<div className="col">
			<button
				onClick={selectHandler}
				type="button"
				className={`btn dropdown-toggle text-light ${cls.bgBtn} w-100`}
			>
				Выбор сотрудников
			</button>
		</div>
	);
};

export default UserSelect;
