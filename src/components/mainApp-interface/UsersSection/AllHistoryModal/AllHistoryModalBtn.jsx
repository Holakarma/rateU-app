import React from 'react';
import History from "../../../../icons/History/History";
import AllHistoryModal from "./AllHistoryModal";

const AllHistoryModalBtn = ({fetchedRates}) => {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    if (!BX24.isAdmin()) return null;

    return (
        <>
            <button className="btn" onClick={handleShow}>
                <History fill="#6443c7" />
            </button>
            <AllHistoryModal handleClose={handleClose} show={show} fetchedRates={fetchedRates} />
        </>
    );
};

export default AllHistoryModalBtn;