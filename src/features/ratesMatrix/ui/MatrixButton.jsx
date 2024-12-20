import React from 'react';
import cls
	from 'widgets/userSection/ui/userSection.module.css';
import MatrixModal from './MatrixModal';

const MatrixButton = ( {
						   employee,
						   selectedCriteria,
						   rights
					   } ) => {
	const [ isModalShowed, setModalShow ] = React.useState(false);

	return (
		<>
			<button
				onClick={() => setModalShow(!isModalShowed)}
				className={`${cls.bgBtn} text-light rounded px-2 py-1`}
			>
				Матрица критериев
			</button>
			<MatrixModal
				rights={rights}
				selectedCriteria={selectedCriteria}
				show={isModalShowed}
				onHide={() => setModalShow(false)}
				employee={employee}
			/>
		</>
	);
};

export default MatrixButton;