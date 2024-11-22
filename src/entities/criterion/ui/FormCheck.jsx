import React from 'react';
import {
	Form,
	FormGroup,
	FormLabel
} from 'react-bootstrap';
import cls
	from 'widgets/userSection/ui/userSection.module.css';

const FormCheck = ( {
						criterion,
						setActivatedCriteria
					} ) => {
	const [ checkedCriterion, setCheckedCriterion ] = React.useState(true);

	function handleChangeCriterion() {
		setCheckedCriterion(!checkedCriterion);
		if (!checkedCriterion) {
			setActivatedCriteria(prevState => [ ...prevState, criterion ]);
		} else {
			setActivatedCriteria(prevState => prevState.filter(name => name !== criterion));
		}
	};

	return (
		<div
			className={`${cls.criteriaDropdown} dropdown-item p-0`}>
			<FormGroup>
				<FormLabel
					className="w-100 px-3 py-1 cursor-pointer">
					<Form.Check
						type="checkbox"
						id={`default-${criterion.ID}`}
						className="me-2 cursor-pointer"
						label={criterion.NAME}
						checked={checkedCriterion}
						onChange={handleChangeCriterion}
					/>
				</FormLabel>
			</FormGroup>
		</div>
	);
};

export default FormCheck;