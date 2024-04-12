import React, { useEffect, useContext } from 'react';
import { Responsibles } from '../../Responsibles/Responsibles';
import { getRates } from '../../../../utils/saveRatesToEntity';
import { saveRates } from '../../../../utils/saveToLS';
import { PlacementContext } from '../../../../utils/placementContext';
import { ArrowHref } from '../../../../icons/ArrowHref/ArrowHref';
import cls from './placementApp.module.css'

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

    const [id, setId] = React.useState(null)
    useEffect(() => {
        BX24.callMethod('app.info', {}, (res) => {
            setId(res.data().ID)
        })

    }, [])

    return (
        <div className="container position-relative py-3">
            <span className='d-flex justify-content-between align-items-center'>
                <h1>Оценка сотрудников</h1>
                {id ? (
                    <a
                        href={`https://avtorit24.ru/marketplace/app/${id}/`}
                        target='_blank'
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
                <div className='containerLoader'>
                    <div className='loader'></div>
                </div>
            )}
        </div>
    );
};

export default PlacementApp;
