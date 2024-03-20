import React from 'react';
import { UserSelect } from './UserSelect/UserSelect';
import { ShowEmployee } from './/ShowEmployee/ShowEmployee';

export function UserSection() {
    const [employees, setEmployees] = React.useState([])
    console.log(employees);

    return (
        <div>
            <h3>Оценка сотрудников</h3>
            <UserSelect setEmployees={setEmployees}/>
            <div className='mt-4 row g-3'>
                    {employees.map((employee) =>
                        <ShowEmployee employee={employee}/>
                    )}
            </div>
        </div>
    );
} 
