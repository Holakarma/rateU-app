import Modal from 'react-bootstrap/Modal';
import React from 'react';
import MatrixEmployee from './MatrixEmployee';

const MatrixModal = ( {
						  show,
						  onHide,
						  employee,
						  selectedCriteria,
						  rights
					  } ) => {

	return (
		<Modal
			show={show}
			onHide={onHide}
			size="lg"
			centered
			dialogClassName="modal-dialog modal-dialog-scrollable"
		>
			<Modal.Header closeButton>
				<Modal.Title
					id="contained-modal-title-vcenter">
					Матрица критериев
				</Modal.Title>
			</Modal.Header>
			<Modal.Body
				className="d-flex justify-content-center"
				style={{ paddingBottom: '40px' }}>
				<div style={{
					width: '100%',
					height: '400px'
				}}>
					<MatrixEmployee
						rights={rights}
						employee={employee}
						selectedCriteria={selectedCriteria}
					/>
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default MatrixModal;