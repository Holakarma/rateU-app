import React, {useEffect} from 'react';
import {getUsers} from "../../../../utils/createSavedUsers";
import {getTask} from "../../../../utils/getTask";
import {getCurrentUser} from "../../../../utils/getCurrentUser";
import {dateOptions, timeOptions} from "../../../../config/consts";

const TableRow = ({rate}) => {

    const [user, setUser] = React.useState(null);
    const [currentUser, setCurrentUser] = React.useState(null);
    const [task, setTask] = React.useState(null);

    useEffect(() => {
        (async () => {
            const userResponse = await getUsers([rate.MODIFIED_BY]);
            setUser(userResponse[0]);
        })()
    }, [rate]);

    useEffect(() => {
        (async () => {
            const taskResponse = await getTask(rate.PROPERTY_VALUES.TASK_ID);
            setTask(taskResponse.task);
        })()
    }, [rate]);

    useEffect(() => {
        (async () => {
            const userResponse = await getCurrentUser();
            setCurrentUser(userResponse);
        })()
    }, [rate]);

    if (!currentUser || !user || !task) return null;

    return (
        <tr>
            <td>{user.NAME} {user.LAST_NAME}</td>
            <td>
                <a
                href={`https://${BX24.getDomain()}/company/personal/user/${
                    currentUser.ID
                }/tasks/task/view/${task.id}/`}
                className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                target="_blank"
                >
                    {task.title}
                </a>
            </td>
            <td>
                {new Date(rate.DATE_CREATE).toLocaleString('ru', {
                    ...dateOptions,
                })}
            </td>
        </tr>
    );
};

export default TableRow;