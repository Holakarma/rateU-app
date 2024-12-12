import React, { useContext, useEffect } from 'react';
import {
	Responsibles
} from 'widgets/responsibles/ui/Responsibles';
import { getRates } from 'entities/rate/api/getRates';
import {
	ErrorContext
} from 'shared/context/errorContext/errorContext';
import {
	PlacementContext
} from 'shared/context/placementContext/placementContext';
import cls from './placementApp.module.css';
import { ArrowHref } from 'shared/icons/ArrowHref';

const PlacementPage = () => {
	const [ isRatesLoaded, setRatesLoaded ] = React.useState(false);
	const placementInfo = useContext(PlacementContext);

	const setError = React.useContext(ErrorContext);

	useEffect(() => {

		(async () => {
			const rates = await getRates(
				undefined,
				placementInfo.options.taskId
			).catch(( e ) => setError(e));

			setRatesLoaded(true);
		})();
	});

	const [ id, setId ] = React.useState(null);
	useEffect(() => {
		try {
			BX24.callMethod('app.info', {}, ( res ) => {
				if (res.error()) {
					reject(new Error(res?.error().ex.error_description));
					return;
				}
				setId(res.data().ID);
			});
		} catch (e) {
			setError(e);
		}
	}, []);

	return (
		<div className="container position-relative py-3">
            <span
				className="d-flex justify-content-between align-items-center">
                <h1>Оценка сотрудников</h1>
				{id ? (
					<a
						href={`https://${BX24.getDomain()}/marketplace/app/${id}/`}
						target="_blank"
						className={`${cls.href} text-dark fs-6 text-decoration-none`}
					>
						Перейти к приложению
						<ArrowHref className="ms-2" />
					</a>
				) : (
					''
				)}
            </span>
			{isRatesLoaded ? (
				<Responsibles />
			) : (
				<div className="containerLoader">
					<div className="loader"></div>
				</div>
			)}
		</div>
	);
};

export default PlacementPage;
