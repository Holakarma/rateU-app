import React, {
	useContext,
	useEffect,
	useState
} from 'react';
import { getTask } from '/src/entities/task/api/getTask';
import { ShowDetailedRate } from './ShowDetailedRate';
import { useCurrentUser } from 'entities/user';
import {
	CriterionContext
} from 'shared/context/criterionContext/CriterionContext';

const RateInfo = ( { rates } ) => {
	const [ task, setTask ] = useState(undefined);

	const {
		criteria
	} = useContext(CriterionContext);

	const { data: user, isLoading } = useCurrentUser();

	useEffect(() => {
		(async () => {
			const task = await getTask(rates.taskId);

			if (task?.task) {
				setTask(task);
			}
		})();
	}, []);

	if (!task || !user) return null;

	if (isLoading) return <div>Загрузка...</div>;

	return (
		<div className="card my-2">
			<div className="card-body">
				<ul className="list-group">
					{rates.rates.map(( rate ) => {
						const criterion = criteria.find(
							( c ) =>
								c.ID === rate.PROPERTY_VALUES.CRITERION_ID
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
			<div
				className="card-footer text-end opacity-75">
				<span>Задача: </span>
				<a
					href={`https://${BX24.getDomain()}/company/personal/user/${user.ID
					}/tasks/task/view/${task.task.id}/`}
					className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
					target="_blank"
				>
					<i>{task.task.title}</i>
				</a>
			</div>
		</div>
	);
};

export default RateInfo;
