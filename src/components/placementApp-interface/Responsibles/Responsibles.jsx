import React, { useContext, useEffect } from 'react';
import { PlacementContext } from '../../../utils/placementContext';
import { getTask } from '../../../utils/getTask';
import { RateUser } from '../RateUser/RateUser';
import { getCriteria } from '../../../utils/getCriteria';

export function Responsibles() {
    const [task, setTask] = React.useState();
    const placementInfo = useContext(PlacementContext);
    const [criteria, setCriteria] = React.useState([]);
    useEffect(async () => {
        const placementTask = await getTask(placementInfo.options.taskId);
        setCriteria(await getCriteria());
        console.log(criteria);
        const accomplicesList = placementTask.task.accomplices;
        if (accomplicesList.length) {
            placementTask.task.accomplices = accomplicesList.filter(
                (accomplice) => accomplice != placementTask.task.responsibleId,
            );
        }
        setTask(placementTask.task);
    }, [task, criteria]);

    return task ? (
        <div>
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
                                userData={task.accomplicesData[accomplice]}
                                criteria={criteria}
                            />
                        ))}
                    </div>
                </>
            ) : (
                <div className="spinner-grow">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )}
        </div>
    ) : null;
}
