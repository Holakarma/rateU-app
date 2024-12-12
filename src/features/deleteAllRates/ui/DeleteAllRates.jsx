import React from 'react';
import { getRates } from '../../../entities/rate/api/getRates';

const DeleteAllRates = () => {
	async function clickHandler() {
		const listrates = await getRates(true);
		const deleteBatch = listrates.map(( el ) => [
			'entity.item.delete',
			{ ENTITY: 'rates', ID: el.ID }
		]);
		console.log(deleteBatch);
	}

	return (
		<button
			onClick={clickHandler}
			className="col-3 btn btn-danger"
		>
			Удалить все оценки
		</button>
	);
};

export default DeleteAllRates;
