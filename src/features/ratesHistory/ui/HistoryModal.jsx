import React, { useEffect } from 'react';
import { RateInfo, useRates } from 'entities/rate';
import Modal from 'react-bootstrap/Modal';

const HistoryModal = ( {
						   show,
						   onHide,
						   employee,
					   } ) => {

	const [ ratesList, setRatesList ] = React.useState([]);
	const { rates } = useRates();

	useEffect(() => {
		(async () => {
			const employeeRates = rates.filter(rate => rate.PROPERTY_VALUES.USER_ID === employee.id);
			setRatesList([]);
			const uniqueTasks = Array.from(
				new Set(
					employeeRates.map(( rate ) => rate.PROPERTY_VALUES.TASK_ID)
				)
			);
			uniqueTasks.forEach(( task ) => {
				let ratesForTheTask = [];
				for (let rate of employeeRates) {
					if (rate.PROPERTY_VALUES.TASK_ID === task) {
						ratesForTheTask.push(rate);
					}
				}
				setRatesList(( prestate ) => [
					...prestate,
					{
						taskId: task,
						rates: ratesForTheTask
					}
				]);
			});
		})();

	}, [ rates ]);
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
					История оценок
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className="">
					{ratesList.map(( rates ) => (
						<RateInfo
							key={rates.taskId}
							rates={rates}
						/>
					))}
					{ratesList.length === 0 ? (
						<i className="text-secondary">Нет
							оценок</i>
					) : null}
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default HistoryModal;