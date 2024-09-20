import React, {useEffect} from 'react';
import {UserSelect} from './UserSelect/UserSelect';
import {ShowEmployee} from './ShowEmployee/ShowEmployee';
import {getCriteria} from '../../../utils/getCriteria';
import {ChooseCriteria} from './ChooseCriteria/ChooseCriteria';
import {saveEmployees} from '../../../utils/saveToLS';
import {PeriodPicker} from './PeriodPicker/PeriodPicker';
import {isAllowed} from '../../../utils/isAllowed';
import {ErrorContext} from '../../../utils/errorContext';
import {getAllUsers} from '../../../utils/getAllUsers';

export function UserSection({
                                setSelectedCriteria,
                                setPeriod,
                                period,
                                selectedCriteria,
                                fetchedRates,
                            }) {
    let savedEmployees = saveEmployees();
    const [employees, setEmployees] = React.useState(
        savedEmployees ? savedEmployees : [],
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

    return (
        <div>
            <div className="d-flex justify-content-between mt-4 mb-2">
                <h3>Оценка сотрудников</h3>
                <div className="g-3 d-flex row justify-content-end">
                    <UserSelect setEmployees={setEmployees}/>
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
                    <div className="containerLoader align-baseline justify-content-start h-auto">
                        <div className="loader"></div>
                    </div>
                )}
            </div>
        </div>
    );
}
