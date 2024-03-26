import React, { useEffect } from 'react';
import { UserSelect } from './UserSelect/UserSelect';
import { ShowEmployee } from './/ShowEmployee/ShowEmployee';
import { getCriteria } from '../../../utils/getCriteria';
import { ChooseCriteria } from './ChooseCriteria/ChooseCriteria';
import { getRates } from '../../../utils/getRates';

export function UserSection() {
    const [employees, setEmployees] = React.useState([]);
    const [criteria, setCriteria] = React.useState([]);
    const [fetchedRates, setFetchedRates] = React.useState([]);

    useEffect(async () => {
        setCriteria(await getCriteria());
        setFetchedRates(await getRates());
    }, []);

    return (
        <div>
            <h3>Оценка сотрудников</h3>
            <div className="d-flex gap-3">
                <UserSelect setEmployees={setEmployees} />
                <ChooseCriteria
                    criteria={criteria}
                    setCriteria={setCriteria}
                />
            </div>
            <div className="mt-4 row g-3">
                {fetchedRates.length ? (
                    employees.map((employee) => (
                        <ShowEmployee
                            key={employee.id}
                            employee={employee}
                            criteria={criteria}
                            fetchedRates={fetchedRates}
                        />
                    ))
                ) : (
                    <div
                        className="spinner-grow"
                        role="status"
                    >
                        <span className="visually-hidden">Loading...</span>
                    </div>
                )}
            </div>
        </div>
    );
}
