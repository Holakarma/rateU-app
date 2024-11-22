import { useCriteria } from 'entities/criterion';
import { Dropdown } from 'react-bootstrap';
import cls
	from 'widgets/userSection/ui/userSection.module.css';
import {
	RenderCriteria
} from 'entities/criterion/ui/RenderCriteria';
import React from 'react';

const ChooseCriteria = ( { setSelectedCriteria } ) => {

	const { isLoading } = useCriteria();


	if (isLoading) return <p>Загрузка...</p>;

	return (
		<div className="col">
			<Dropdown autoClose="outside">
				<Dropdown.Toggle
					className={`position-relative ${cls.bgBtn} w-100`}
					id="dropdown-autoclose-outside"
				>
					Выбор критериев
				</Dropdown.Toggle>
				<RenderCriteria
					setSelectedCriteria={setSelectedCriteria}
				/>
			</Dropdown>
		</div>
	);
};

export default ChooseCriteria;