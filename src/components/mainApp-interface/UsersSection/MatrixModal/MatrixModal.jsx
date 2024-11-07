import React, { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { MatrixEmployee } from './MatrixEmployee';

export function MatrixModal({
    show,
    onHide,
    employee,
    employeeRates,
    selectedCriteria,
    rights,
}) {

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
                    <MatrixEmployee
                        rights={rights}
                        employee={employee}
                        employeeRates={employeeRates}
                        selectedCriteria={selectedCriteria}
                    />
                </div>
            </Modal.Body>
        </Modal>
    );
}
