import React, { useEffect } from 'react';
import { UserSelect } from './UserSelect/UserSelect';
import { ShowEmployee } from './/ShowEmployee/ShowEmployee';
import { getCriteria } from '../../../utils/getCriteria';
import { ChooseCriteria } from './ChooseCriteria/ChooseCriteria';
import { getRates } from '../../../utils/getRates';
import { saveEmployees, savePeriod } from '../../../utils/saveToLS';
import { PeriodPicker } from './PeriodPicker/PeriodPicker';
import { isAllowed } from '../../../utils/isAllowed';

export function UserSection() {
    let savedEmployees = saveEmployees();
    let savedPeriod = savePeriod();
    const [employees, setEmployees] = React.useState(
        savedEmployees ? savedEmployees : [],
    );
    const [criteria, setCriteria] = React.useState([]);
    const [selectedCriteria, setSelectedCriteria] = React.useState([]);
    const [fetchedRates, setFetchedRates] = React.useState([]);
    const [isLoaded, setLoaded] = React.useState(false);
    const [period, setPeriod] = React.useState(savedPeriod);
    const [rights, setRights] = React.useState(undefined);

    useEffect(async () => {
        const listAllCriteria = await getCriteria();
        setRights(await isAllowed(undefined, employees.map(e => e.id)));
        setCriteria(listAllCriteria);
        setSelectedCriteria(listAllCriteria);
        setLoaded(true);
        setTimeout(BX24.fitWindow, 20);
    }, []);

    useEffect(async () => {
        savePeriod(true, period);
        const allRates = await getRates(true, period);
        const ratesCriteria = allRates.filter((rateValue) =>
            selectedCriteria.find(
                (sc) => rateValue.PROPERTY_VALUES.CRITERION_ID === sc.ID,
            ),
        );
        setFetchedRates(ratesCriteria);
    }, [period, selectedCriteria]);

    return (
        <div>
            <div className="d-flex justify-content-between mt-4 mb-2">
                <h3>Оценка сотрудников</h3>
                <div className="g-3 d-flex row justify-content-end">
                    <UserSelect setEmployees={setEmployees} />
                    <ChooseCriteria
                        criteria={criteria}
                        setSelectedCriteria={setSelectedCriteria}
                    />
                </div>
            </div>
            <PeriodPicker
                setPeriod={setPeriod}
                period={period}
            />
            <div className="mt-2 row g-3 mb-4">
                {isLoaded ? (
                    employees.map((employee) => (
                        <ShowEmployee
                            key={employee.id}
                            employee={employee}
                            selectedCriteria={selectedCriteria}
                            fetchedRates={fetchedRates}
                            rights={rights}
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
