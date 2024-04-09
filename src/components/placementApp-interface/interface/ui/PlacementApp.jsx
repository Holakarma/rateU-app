import React, { useEffect, useContext } from 'react';
import { Responsibles } from '../../Responsibles/Responsibles';
import { getRates } from '../../../../utils/saveRatesToEntity';
import { saveRates } from '../../../../utils/saveToLS';
import { PlacementContext } from '../../../../utils/placementContext';

const PlacementApp = () => {
    const [isRatesLoaded, setRatesLoaded] = React.useState(false);
    const placementInfo = useContext(PlacementContext);
    useEffect(async () => {
        const rates = await getRates(undefined, placementInfo.options.taskId);
        // if (rates.length) {
        //     saveRates(
        //         rates.map((rate) => ({
        //             task: rate.PROPERTY_VALUES.TASK_ID,
        //             user: rate.PROPERTY_VALUES.USER_ID,
        //             criterion: rate.PROPERTY_VALUES.CRITERION_ID,
        //             comm: rate.PROPERTY_VALUES.COMMENT,
        //             rate: rate.PROPERTY_VALUES.RATE,
        //         })),
        //     );
        // }
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
