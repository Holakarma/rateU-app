import React, { useContext, useEffect } from 'react';
import { PlacementContext } from '../../../utils/placementContext';
import { RatesContext } from '../../../utils/ratesContext';
import { getTask } from '../../../utils/getTask';
import { RateUser } from '../RateUser/RateUser';
import { getCriteria } from '../../../utils/getCriteria';
import { saveRates } from '../../../utils/saveRatesLS';
import { SaveRatesBtn } from '../SaveRatesBtn/SaveRatesBtn';

export function Responsibles() {
    const [task, setTask] = React.useState();
    const placementInfo = useContext(PlacementContext);
    const [criteria, setCriteria] = React.useState([]);
    const [rates, setRates] = React.useState([]);
    const [isCriteriaAdded, setCriteriaAdded] = React.useState(true);
    useEffect(async () => {
        const placementTask = await getTask(placementInfo.options.taskId);
        const fetchedCriteria = await getCriteria();
        if (fetchedCriteria.length) {
            setCriteria(fetchedCriteria);
        } else {
            setCriteriaAdded(false);
        }
        const accomplicesList = placementTask.task.accomplices;
        if (accomplicesList.length) {
            placementTask.task.accomplices = accomplicesList.filter(
                (accomplice) => accomplice != placementTask.task.responsibleId,
            );
        }
        let loadedRates = saveRates();
        if (loadedRates) setRates(loadedRates);
        setTask(placementTask.task);
    }, [task, criteria]);

    return task ? (
        <div>
            <RatesContext.Provider value={{ rates, setRates }}>
                {isCriteriaAdded ? (
                    <>
                        <h5>Ответственный</h5>
                        <RateUser
                            userData={task.responsible}
                            criteria={criteria}
                        />
                        {task.accomplices.length > 0 ? (
                            <>
                                <h5>Соисполнители</h5>
                                <div>
                                    {task.accomplices.map((accomplice) => (
                                        <RateUser
                                            key={accomplice}
                                            userData={
                                                task.accomplicesData[accomplice]
                                            }
                                            criteria={criteria}
                                        />
                                    ))}
                                </div>
                                <SaveRatesBtn />
                            </>
                        ) : (
                            <div className="spinner-grow">
                                <span className="visually-hidden">
                                    Loading...
                                </span>
                            </div>
                        )}
                    </>
                ) : (
                    <div>Пожалуйста, добавьте критерии для оценки в приложении RateU</div>
                )}
            </RatesContext.Provider>
        </div>
    ) : null;
}
