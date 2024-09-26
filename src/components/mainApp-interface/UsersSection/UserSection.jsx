import React, { useEffect } from 'react';
import { UserSelect } from './UserSelect/UserSelect';
import { ShowEmployee } from './ShowEmployee/ShowEmployee';
import { getCriteria } from '../../../utils/getCriteria';
import { ChooseCriteria } from './ChooseCriteria/ChooseCriteria';
import { saveEmployees } from '../../../utils/saveToLS';
import { PeriodPicker } from './PeriodPicker/PeriodPicker';
import { isAllowed } from '../../../utils/isAllowed';
import { ErrorContext } from '../../../utils/errorContext';
import { getAllUsers } from '../../../utils/getAllUsers';
import RatesTable from "./RatesTable/RatesTable";
import cls from './userSection.module.css';
import { MatrixTemp } from './Matrix/MatrixTemp';
import History from "../../../icons/History/History";
import AllHistoryModalBtn from "./AllHistoryModal/AllHistoryModalBtn";


export function UserSection({
    setSelectedCriteria,
    setPeriod,
    period,
    selectedCriteria,
    fetchedRates,
}) {
    const [employees, setEmployees] = React.useState(
        saveEmployees() || [],
    );
    const [criteria, setCriteria] = React.useState([]);
    const [isLoaded, setLoaded] = React.useState(false);
    const [rights, setRights] = React.useState(undefined);

    const setError = React.useContext(ErrorContext);

    useEffect(async () => {
        let isMounted = true;
        try {
            const allUsers = await getAllUsers();
            const fetchedRights = await isAllowed(
                undefined,
                allUsers.map((e) => e.ID),
            );
            const listAllCriteria = await getCriteria();
            if (isMounted) {
                setCriteria(listAllCriteria);
                setSelectedCriteria(listAllCriteria);
                setRights(fetchedRights);
                setLoaded(true);
            }
        } catch (e) {
            setError(e);
        }
        return () => (isMounted = false);
    }, []);

    useEffect(() => {
        setTimeout(BX24.fitWindow, 500)
    }, [isLoaded, selectedCriteria, employees]);

    const [userRates, setUserRates] = React.useState(null);

    useEffect(() => {
        const aliases = {};

        employees.forEach((e) => {
            const criteria = selectedCriteria.map((c) => [c.ID, -1]);

            Object.assign(aliases, {
                [e.id]: Object.fromEntries(new Map(criteria))
            })
        });

        setUserRates(aliases);
    }, [employees, selectedCriteria]);

    return (
        <div>
            <div className="d-flex justify-content-between mt-4 mb-2">
                <h3>Оценка сотрудников <AllHistoryModalBtn fetchedRates={fetchedRates}/></h3>
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
                    employees.map((employee) =>  (
                        <ShowEmployee
                            key={employee.id}
                            employee={employee}
                            setUserRates={setUserRates}
                            selectedCriteria={selectedCriteria}
                            fetchedRates={fetchedRates}
                            rights={rights}
                        />
                    ))
                ) : (
                    <div className="containerLoader align-baseline justify-content-start h-auto">
                        <div className="loader"></div>
                    </div>
                )}
            </div>
            {
                employees.length && selectedCriteria.length ?
                <>
                    <div className={`${cls.card} overflow-x-auto card mb-4`}>
                        <RatesTable userRates={userRates} employees={employees} selectedCriteria={selectedCriteria}/>
                    </div>
                    <div className="overflow-x-auto mb-4">
                        <MatrixTemp employees={employees} selectedCriteria={selectedCriteria}/>
                    </div>
                </> : null
            }
        </div>
    );
}
