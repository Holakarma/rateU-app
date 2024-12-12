import React from 'react';
import { useRates } from 'entities/rate';
import AllHistoryModal from './AllHistoryModal';
import { History } from 'shared/icons/History'

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
