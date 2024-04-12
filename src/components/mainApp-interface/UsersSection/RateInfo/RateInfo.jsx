import React, { useEffect } from 'react';
import { getTask } from '/src/utils/getTask';
import { ShowDetailedRate } from '../ShowDetailedRate/ShowDetailedRate';
import { ErrorContext } from '../../../../utils/errorContext';

export function RateInfo({ rates, employee, user, criteria }) {
    const [task, setTask] = React.useState(undefined);

    const setError = React.useContext(ErrorContext);

    useEffect(async () => {
        setTask((await getTask(rates.taskId).catch((e) => setError(e)))?.task);
    });
    return task ? (
        <div className="">
            <div className="card my-2">
                <div className="card-body">
                    <ul className="list-group">
                        {rates.rates.map((rate) => {
                            const criterion = criteria.find(
                                (c) =>
                                    c.ID == rate.PROPERTY_VALUES.CRITERION_ID,
                            );
                            return criterion ? (
                                <ShowDetailedRate
                                    key={rate.ID}
                                    rate={rate}
                                    criterion={criterion}
                                />
                            ) : null;
                        })}
                    </ul>
                </div>
                <div className="card-footer text-end opacity-75">
                    <span>Задача: </span>
                    <a
                        href={`https://${BX24.getDomain()}/company/personal/user/${
                            user.ID
                        }/tasks/task/view/${task.id}/`}
                        className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                        target="_blank"
                    >
                        <i className="">{task.title}</i>
                    </a>
                </div>
            </div>
        </div>
    ) : null;
}
