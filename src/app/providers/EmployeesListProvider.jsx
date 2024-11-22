import React from 'react';
import {
	EmployeesContext
} from 'shared/model/EmployeesContext';
import { saveEmployees } from 'shared/model/saveToLS';

const EmployeesListProvider = ( { children } ) => {
	const [ employees, setEmployees ] = React.useState(saveEmployees() || []);

	return (
		<EmployeesContext.Provider
			value={{ employees, setEmployees }}>
			{children}
		</EmployeesContext.Provider>
	);
};

export default EmployeesListProvider;