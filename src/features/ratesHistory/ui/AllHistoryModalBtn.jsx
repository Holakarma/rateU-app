import React from 'react';
import { useRates } from 'entities/rate';
import History from 'icons/History/History';
import AllHistoryModal from './AllHistoryModal';

const AllHistoryModalBtn = () => {
	const [ show, setShow ] = React.useState(false);

	const { rates: fetchedRates } = useRates();

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	if (!BX24.isAdmin()) return null;

	return (
		<>
			<button className="btn" onClick={handleShow}>
				<History fill="#6443c7" />
			</button>
			<AllHistoryModal handleClose={handleClose}
							 show={show}
							 fetchedRates={fetchedRates} />
		</>
	);
};

export default AllHistoryModalBtn;