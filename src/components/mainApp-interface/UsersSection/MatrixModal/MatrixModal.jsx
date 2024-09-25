import React, { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { RateInfo } from '../RateInfo/RateInfo';
import { getCurrentUser } from '/src/utils/getCurrentUser';
import { ErrorContext } from '../../../../utils/errorContext';
import { Matrix } from './Matrix';

export function MatrixModal({
    show,
    onHide,
    employee,
    employeeRates,
    criteria,
}) {
    const [user, setUser] = React.useState(undefined);
    const [ratesList, setRatesList] = React.useState([]);

    const setError = React.useContext(ErrorContext);

    useEffect(async () => {
        let isMounted = true;
        if (isMounted) {
            setUser(await getCurrentUser().catch((e) => setError(e)));
            setRatesList([]);
            const uniqueTasks = Array.from(
                new Set(
                    employeeRates.map((rate) => rate.PROPERTY_VALUES.TASK_ID),
                ),
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
        }
        return () => {
            isMounted = false;
        };
    }, [employeeRates]);

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
                    Матрица критериев
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='d-flex justify-content-center' style={{ paddingBottom: '40px', }}>
                <div style={{ width: '100%', height: '400px' }}>
                    <Matrix
                        employee={employee}
                        employeeRates={employeeRates}
                        criteria={criteria}
                    />
                </div>
            </Modal.Body>
        </Modal>
    );
}
