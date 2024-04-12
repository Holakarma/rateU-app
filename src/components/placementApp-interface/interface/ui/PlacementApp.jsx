import React, { useEffect, useContext } from 'react';
import { Responsibles } from '../../Responsibles/Responsibles';
import { getRates } from '../../../../utils/saveRatesToEntity';
import { saveRates } from '../../../../utils/saveToLS';
import { PlacementContext } from '../../../../utils/placementContext';
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
    return (
        <div className="container position-relative py-3">
            <h1>Оценка сотрудников</h1>
            {isRatesLoaded ? (
                <Responsibles />
            ) : (
                <div
                    className="spinner-grow"
                    role="status"
                >
                    <span className="visually-hidden">Loading...</span>
                </div>
            )}
        </div>
    );
};

export default PlacementApp;
