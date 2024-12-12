import React from 'react';
import deleteCriterion
	from 'entities/criterion/api/deleteCriterion';
import {
	updateCriterion
} from 'entities/criterion/api/updateCriterion';
import {
	ErrorContext
} from 'shared/context/errorContext/errorContext';
import { addCriterion } from 'entities/criterion';
import { Delete } from 'shared/icons/Delete';


const CriterionInput = ( {
									criterion,
									refreshHandler,
									access
								} ) => {
	const setError = React.useContext(ErrorContext);
	const [ criterionName, setCriterionName ] = React.useState(
		criterion ? criterion.NAME : ''
	);
	const [ isCriterionActive, setCriterionActive ] = React.useState(
		criterion?.ACTIVE === 'Y'
	);
	const [ isCorrect, setCorrect ] = React.useState(true);
	const [ showApprove, setApprove ] = React.useState(false);

	const [ refreshPending, setRefreshPending ] = React.useState(false);

	async function criterionHandler() {
		setRefreshPending(true);
		if (!criterionName.length) {
			setCorrect(false);
			return;
		}
		if (!criterion) {
			await addCriterion(criterionName).catch(( e ) => setError(e));
			setCriterionName('');
		} else {
			await updateCriterion(
				criterion.ID,
				criterionName,
				!isCriterionActive
			);
		}
		refreshHandler();
		setRefreshPending(false);
	}

	async function deleteHandler() {
		if (criterion) {
			setRefreshPending(true);
			await deleteCriterion(criterion.ID);
			refreshHandler();
			setRefreshPending(false);
		}
	}

	return (
		<div
			className="row mb-2 align-items-center justify-content-end position-relative">
			<div className="input-group col">
				{criterion ? (
					<div className="input-group-text">
						<input
							className="form-check-input mt-0"
							type="checkbox"
							disabled={!access || refreshPending}
							checked={isCriterionActive}
							onChange={() => {
								criterionHandler();
								setCriterionActive(!isCriterionActive);
							}}
							id={
								criterion
									? `check-${criterion.ID}`
									: 'check-newCriterion'
							}
						/>
					</div>
				) : null}
				<input
					type="text"
					disabled={!access}
					className={`form-control ${
						isCorrect ? '' : 'border-danger border-2'
					}`}
					placeholder="Новый критерий"
					aria-describedby="basic-addon1"
					onInput={( e ) => {
						setCriterionName(e.target.value);
						setCorrect(true);
					}}
					onBlur={() => {
						setCriterionName(criterionName.trim());
					}}
					onKeyDown={( e ) => {
						if (e.key === 'Enter') {
							criterionHandler();
						}
					}}
					value={criterionName}
					id={
						criterion ? `name-${criterion.ID}` : 'name-newCriterion'
					}
				/>
				{criterionName.length && criterionName != criterion?.NAME ? (
					<button
						onClick={criterionHandler}
						type="button"
						disabled={!access || refreshPending}
						className={`btn btn-${
							isCorrect ? 'success' : 'danger'
						}`}
					>
						{isCorrect
							? criterion
								? 'Применить'
								: 'Добавить'
							: 'Введите название'}
					</button>
				) : null}
			</div>
			{criterion ? (
				<button
					onClick={() => {
						setApprove(!showApprove);
					}}
					type="button"
					disabled={!access || refreshPending}
					className="btn btn-danger col-1"
				>
					<Delete size={24} />
				</button>
			) : (
				<div className="col-1"></div>
			)}
			{showApprove && !refreshPending ? (
				<div
					className="col-12 py-2 text-end row align-items-center justify-content-end">
					<p className="col mb-0">
						Будут утеряны все оценки этого
						критерия. Вы уверены?
					</p>
					<button
						className="btn btn-secondary col-2"
						onClick={deleteHandler}
						disabled={refreshPending}
					>
						{refreshPending ? 'Удаление...' : 'Удалить'}
					</button>
				</div>
			) : null}
			{refreshPending ? (
				<div
					className="position-absolute start-100">
					<div
						className="spinner-border text-secondary">
						<span
							className="visually-hidden">Loading...</span>
					</div>
				</div>
			) : null}
		</div>
	);
}

export default CriterionInput;
