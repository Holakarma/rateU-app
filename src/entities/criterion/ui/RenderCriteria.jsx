import React, { useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import FormCheck from './FormCheck';
import cls
	from 'widgets/userSection/ui/userSection.module.css';
import { useCriteria } from 'entities/criterion';

export function RenderCriteria( {
									setSelectedCriteria
								} ) {

	const { criteria } = useCriteria();

	const [ activatedCriteria, setActivatedCriteria ] = React.useState(criteria);
	useEffect(() => {
		if (criteria) {
			setActivatedCriteria(criteria);
		}
	}, [ criteria ]);

	const handleSaveCriteria = () => {
		setSelectedCriteria(activatedCriteria);
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