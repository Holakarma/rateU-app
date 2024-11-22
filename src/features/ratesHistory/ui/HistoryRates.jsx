import React from 'react';
import cls
	from 'widgets/userSection/ui/userSection.module.css';
import HistoryModal from './HistoryModal';

const HistoryRates = ( { employee } ) => {
	const [ isModalShowed, setModalShow ] = React.useState(false);

	return (
		<>
			<button
				onClick={() => setModalShow(!isModalShowed)}
				className={`${cls.bgBtn} text-light rounded px-2 py-1`}
			>
				История
			</button>
			<HistoryModal
				show={isModalShowed}
				onHide={() => setModalShow(false)}
				employee={employee}
			/>
		</>
	);
};

export default HistoryRates;