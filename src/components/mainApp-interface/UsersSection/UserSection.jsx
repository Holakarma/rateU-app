import React, { useEffect } from 'react';
import { UserSelect } from './UserSelect/UserSelect';
import { ShowEmployee } from './/ShowEmployee/ShowEmployee';
import { getCriteria } from '../../../utils/getCriteria';
import { ChooseCriteria } from './ChooseCriteria/ChooseCriteria';
import { getRates } from '../../../utils/getRates';
import { saveEmployees } from '../../../utils/saveEmployeesLS';
import cls from './ChooseCriteria/renderCriteria.module.css'
import { PeriodPicker } from './PeriodPicker/PeriodPicker';

export function UserSection() {
    let savedEmployees = saveEmployees();
    const [employees, setEmployees] = React.useState(
        savedEmployees ? savedEmployees : [],
    );
    const [criteria, setCriteria] = React.useState([]);
    const [fetchedRates, setFetchedRates] = React.useState([]);
    const [isLoaded, setLoaded] = React.useState(false);
    const [period, setPeriod] = React.useState({
        dateBegin: null,
        dateEnd: null,
    });

    useEffect(async () => {
        setFetchedRates(await getRates(true, period));
    }, [period])

    useEffect(async () => {
        setCriteria(await getCriteria());
        setLoaded(true);
    }, []);

    return (
        <div>
            <h3>Оценка сотрудников</h3>
            <div className="d-flex align-items-center gap-3">
                <div className="row flex-column g-3">
                    <UserSelect setEmployees={setEmployees} />
                    <ChooseCriteria
                        criteria={criteria}
                        setCriteria={setCriteria}
                    />
                </div>
                <PeriodPicker setPeriod={setPeriod}/>
            </div>
            <div className="mt-4 row g-3">
                {isLoaded ? (
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
                    ></div>
                )}
            </div>
        </div>
    );
}
