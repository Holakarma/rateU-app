import React, { useEffect, useContext } from 'react';
import { Responsibles } from '../../Responsibles/Responsibles';
import { getRates } from '../../../../utils/saveRatesToEntity';
import { PlacementContext } from '../../../../utils/placementContext';
import { ArrowHref } from '../../../../icons/ArrowHref/ArrowHref';
import cls from './placementApp.module.css';
import { ErrorContext } from '../../../../utils/errorContext';

const PlacementApp = () => {
    const [isRatesLoaded, setRatesLoaded] = React.useState(false);
    const placementInfo = useContext(PlacementContext);

    const setError = React.useContext(ErrorContext);

    useEffect(async () => {
        const rates = await getRates(
            undefined,
            placementInfo.options.taskId,
        ).catch((e) => setError(e));
        setRatesLoaded(true);
    });

    const [id, setId] = React.useState(null);
    useEffect(() => {
        try {
            BX24.callMethod('app.info', {}, (res) => {
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
            <span className="d-flex justify-content-between align-items-center">
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

export default PlacementApp;
