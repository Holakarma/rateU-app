import React, { useEffect } from 'react';
import { UserSelect } from './UserSelect/UserSelect';
import { ShowEmployee } from './/ShowEmployee/ShowEmployee';
import { getCriteria } from '../../../utils/getCriteria'
import { ChooseCriteria } from './ChooseCriteria/ChooseCriteria';

export function UserSection() {
    const [employees, setEmployees] = React.useState([])
    const [criteria, setCriteria] = React.useState([])

    useEffect(async () => {
        setCriteria(await getCriteria());
    }, [])

    return (
        <div>
            <h3>Оценка сотрудников</h3>
            <div className='d-flex gap-3'>
                <UserSelect setEmployees={setEmployees}/>
                <ChooseCriteria criteria={criteria}/>
            </div>
            <div className='mt-4 row g-3'>
                {employees.map((employee) =>
                    <ShowEmployee 
                        key={employee.id} 
                        employee={employee} 
                        criteria={criteria}
                    />
                )}
            </div>
        </div>
    );
} 
