import React, { useEffect, useState } from 'react';
import {
	ShowCriterionRate
} from 'widgets/userSection/ui/ShowCriterionRate';
import cls
	from 'widgets/userSection/ui/userSection.module.css';
import useAccessRights
	from 'entities/user/hooks/useAccessRights';
import { useAverageRates } from 'entities/rate';
import { HistoryRates } from 'features/ratesHistory';
import round from 'shared/utilities/round';
import { MatrixButton } from 'features/ratesMatrix';
import { getUsers } from 'entities/user';
import { User } from 'shared/icons/User';

export function ShowEmployee( {
								  employee,
								  selectedCriteria,
								  rights
							  } ) {
	const { aliasedRates } = useAverageRates();

	const [ img, setImg ] = React.useState(null);

	useEffect(() => {
		(async () => {
			const userInfo = await getUsers([ employee.id ]);
			setImg(userInfo[0]?.['PERSONAL_PHOTO']);
		})();
	}, []);

	const [ average, setAverage ] = useState(0);

	useEffect(() => {
		if (aliasedRates) {
			const rates = Object.values(aliasedRates[employee.id]);
			const sumRates = rates.reduce(( acc, rate ) => acc + rate, 0) / rates.length;
			setAverage(sumRates);
		}
	}, [ aliasedRates ]);

	const haveAccess = useAccessRights(rights, employee);

	const personalUrl = `https://${BX24.getDomain()}/company/personal/user/${employee.id}/`;

	return (
		<div className="col-6">
			<div
				className={`${cls.card} card position-relative h-100`}
			>
				<div className="card-body row">
					<div className="col-2">
						{img?.length ? (
							<img
								className="rounded-circle w-100"
								src={img}
								alt={employee.name}
							/>
						) : (
							<User
								className="rounded-circle w-100"
							/>
						)}
					</div>
					<div className="col-7 ps-0">
						<h4>
							<a
								className={cls.EmployeeName}
								href={personalUrl}
								target="_blank"
							>
								{employee.name}
							</a>
						</h4>
						<span>
                            Средний балл:
							{average !== -1 ? (
								<span className="ms-1">
                                    {round(average, 2)}
									<span
										className="opacity-50">
										/10
									</span>
                                </span>
							) : (
								<i className="opacity-50 ms-1">
									Нет оценок
								</i>
							)}
                        </span>
					</div>
					<div className="px-2 m-0 mt-2">
						<div
							className="border rounded border-secondary-subtle">
							<ul className="list-group list-group-flush gy-1">
								{
									haveAccess ? aliasedRates && selectedCriteria.map(( selectedCriterion ) => (
										<ShowCriterionRate
											key={selectedCriterion.ID}
											employee={employee}
											criterion={selectedCriterion}
										/>
									)) :
										<li className="list-group-item opacity-75">
											<i>
												Недостаточно
												прав для
												просмотра
												оценок
											</i>
										</li>
								}
							</ul>
						</div>
					</div>
					{average !== -1 ?
						<div
							className="d-flex gap-2 justify-content-end"
						>
							<div className="mt-2">
								<HistoryRates
									employee={employee}
								/>
							</div>
							<div className="mt-2">
								<MatrixButton
									rights={rights}
									selectedCriteria={selectedCriteria}
									employee={employee}
								/>
							</div>
						</div> : null
					}
				</div>
			</div>
		</div>
	);
}
