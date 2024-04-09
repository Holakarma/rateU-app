import React, { useContext, useEffect } from 'react';
import { PlacementContext } from '../../../utils/placementContext';
import { UserContext } from '../../../utils/userContext';
import { RatesContext } from '../../../utils/ratesContext';
import { getTask } from '../../../utils/getTask';
import { RateUser } from '../RateUser/RateUser';
import { getCriteria } from '../../../utils/getCriteria';
import { getRates } from '../../../utils/getRates';
import { SaveRatesBtn } from '../SaveRatesBtn/SaveRatesBtn';
import { isAllowed } from '../../../utils/isAllowed';

export function Responsibles() {
    const [task, setTask] = React.useState();
    const placementInfo = useContext(PlacementContext);
    const userInfo = useContext(UserContext);
    const [criteria, setCriteria] = React.useState([]);
    const [rates, setRates] = React.useState([]);
    const [isCriteriaAdded, setCriteriaAdded] = React.useState(true);
    const [rights, setRights] = React.useState(undefined);

    useEffect(async () => {
        const placementTask = await getTask(placementInfo.options.taskId);
        const allowed = await isAllowed(placementTask.task, undefined, userInfo);
        if (allowed) {
            setRights(allowed);
            const fetchedCriteria = await getCriteria();
            if (fetchedCriteria.length) {
                setCriteria(fetchedCriteria);
            } else {
                setCriteriaAdded(false);
            }
            const accomplicesList = placementTask.task.accomplices;
            if (accomplicesList.length) {
                placementTask.task.accomplices = accomplicesList.filter(
                    (accomplice) =>
                        accomplice != placementTask.task.responsibleId,
                );
            }
            setRates(
                (await getRates()).map((rate) => ({
                    task: rate.PROPERTY_VALUES.TASK_ID,
                    user: rate.PROPERTY_VALUES.USER_ID,
                    criterion: rate.PROPERTY_VALUES.CRITERION_ID,
                    comm: rate.PROPERTY_VALUES.COMMENT,
                    rate: rate.PROPERTY_VALUES.RATE,
                })),
            );
        }
        setTask(placementTask.task);
    }, [task, criteria]);

    return task ? (
        <div>
            <RatesContext.Provider value={{ rates, setRates }}>
                {isCriteriaAdded && rights ? (
                    <>
                        <h5>Ответственный</h5>
                        <RateUser
                            userData={task.responsible}
                            criteria={criteria}
                            rights={rights}
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
                                            rights={rights}
                                        />
                                    ))}
                                </div>
                            </>
                        ) : null}
                        <SaveRatesBtn />
                    </>
                ) : (
                    <div>
                        {rights
                            ? 'Пожалуйста, добавьте критерии для оценки в приложении RateU'
                            : 'У вас нет необходимых прав для оценки в этой задаче.'}
                    </div>
                )}
            </RatesContext.Provider>
        </div>
    ) : null;
}
