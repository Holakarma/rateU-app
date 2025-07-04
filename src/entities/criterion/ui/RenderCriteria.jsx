import React, { useContext, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import FormCheck from './FormCheck';
import cls
	from 'widgets/userSection/ui/userSection.module.css';
import { useCriteria } from 'entities/criterion';
import {
	saveCriteria
} from 'entities/criterion/model/criteriaToLS';
import {
	CriterionContext
} from 'shared/context/criterionContext/CriterionContext';

export function RenderCriteria() {

	const { criteria } = useCriteria();
	const {
		criteria: selectedCriteria,
		setCriteria: setSelectedCriteria
	} = useContext(CriterionContext);

	const [ activatedCriteria, setActivatedCriteria ] = React.useState(criteria);
	useEffect(() => {
		if (selectedCriteria) {
			setActivatedCriteria(selectedCriteria);
		}
	}, [ selectedCriteria ]);

	const handleSaveCriteria = () => {
		setSelectedCriteria(activatedCriteria);
		saveCriteria(activatedCriteria);
	};

	if (!criteria) return null;

	return (
		<Dropdown.Menu>

			{criteria?.map(( criterion ) =>
				<Dropdown.Item
					key={criterion.ID}
					as={FormCheck}
					criterion={criterion}
					setActivatedCriteria={setActivatedCriteria}
				/>
			)}

			<Dropdown.Item
				key="buttonSaveListCriteria"
				className={`${cls.criteriaDropdownBtn} d-flex justify-content-center`}
			>
				<button
					type="button"
					className={`btn ${cls.bgBtn} border border-opacity-50 text-light`}
					onClick={handleSaveCriteria}
				>
					Сохранить
				</button>
			</Dropdown.Item>

		</Dropdown.Menu>
	);
}
