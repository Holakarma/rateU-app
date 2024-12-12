import React from 'react';
import { useRights } from 'entities/user';
import { useAllCriteria } from 'entities/criterion';
import { CriterionInput } from 'features/criterionInput';

const SettingsSection = () => {
	const {
		criteria,
		isLoading,
		refreshCriteria
	} = useAllCriteria();

	const { rights: access } = useRights();

	if (!criteria) return null;
	if (isLoading) return <div>Загрузка...</div>;

	return (
		<div>
			<h3>Настройка критериев </h3>
			{criteria.map(( criterion ) => (
				<CriterionInput
					key={criterion.ID}
					criterion={criterion}
					refreshHandler={refreshCriteria}
					access={access}
				/>
			))}
			{access ? (
				<CriterionInput
					refreshHandler={refreshCriteria}
					access={access}
				/>
			) : (
				<div className="text-end fs-5">
					Недостаточно прав для редактирования
					данного раздела
				</div>
			)}
		</div>
	);
};

export default SettingsSection;
