import React, {useEffect} from 'react';
import Modal from "react-bootstrap/Modal";
import TableRow from "./TableRow";

const AllHistoryModal = ({show, handleClose, fetchedRates}) => {

    const [groupedRates, setGroupedRates] = React.useState([]);

    useEffect(() => {


        const rates = [];
        fetchedRates.forEach((rate) => {
            const similarRate = rates.find((groupedRate) => (
                groupedRate.MODIFIED_BY === rate.MODIFIED_BY &&
                groupedRate.PROPERTY_VALUES.TASK_ID === rate.PROPERTY_VALUES.TASK_ID
            ))

            if (!similarRate) {
                rates.push(rate);
            }
        })
        setGroupedRates(rates);

    }, [fetchedRates]);

    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>История оценок за период</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Оценивающий</th>
                        <th scope="col">Задача</th>
                        <th scope="col">Дата изменения</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        groupedRates.map((rate) => (
                            <TableRow key={rate.ID} rate={rate}/>
                        ))
                    }
                    </tbody>
                </table>
            </Modal.Body>
        </Modal>
    );
};

export default AllHistoryModal;