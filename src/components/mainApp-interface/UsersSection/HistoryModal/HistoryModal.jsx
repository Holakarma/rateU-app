import React, { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { RateInfo } from '../RateInfo/RateInfo';
import { getCurrentUser } from '/src/utils/getCurrentUser';
import getTask from '/src/utils/getTask';

export function HistoryModal({
    show,
    onHide,
    employee,
    employeeRates,
    criteria,
}) {
    const [user, setUser] = React.useState(undefined);
    const [ratesList, setRatesList] = React.useState([]);

    useEffect(async () => {
        setUser(await getCurrentUser());
        const uniqueTasks = Array.from(
            new Set(employeeRates.map((rate) => rate.PROPERTY_VALUES.TASK_ID)),
        );
        uniqueTasks.forEach((task) => {
            let ratesForTheTask = [];
            for (let rate of employeeRates) {
                if (rate.PROPERTY_VALUES.TASK_ID === task) {
                    ratesForTheTask.push(rate);
                }
            }
            setRatesList((prestate) => [
                ...prestate,
                { taskId: task, rates: ratesForTheTask },
            ]);
        });
    }, []);

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
            dialogClassName="modal-dialog modal-dialog-scrollable"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    История оценок
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="">
                    {user ? (
                        ratesList.map((rates) => (
                            <RateInfo
                                key={rates.taskId}
                                rates={rates}
                                employee={employee}
                                user={user}
                                criteria={criteria}
                            />
                        ))
                    ) : (
                        null
                    )}
                    {ratesList.length === 0 ? <i className='text-secondary'>Нет оценок</i> : null}
                </div>
            </Modal.Body>
        </Modal>
    );
}
