import React, { useContext } from 'react';
import { RatesContext } from '../../../utils/ratesContext';
import { getRates } from '../../../utils/saveRatesToEntity';
import { PlacementContext } from '../../../utils/placementContext';
import { ErrorContext } from '../../../utils/errorContext';
import cls from '../../mainApp-interface/UsersSection/userSection.module.css';

export function SaveRatesBtn({isSaved, setSaved}) {
    const placementInfo = useContext(PlacementContext);
    const { rates, setRates } = React.useContext(RatesContext);
    const [isLoading, setLoading] = React.useState(false);
    const setError = useContext(ErrorContext);
    
    let timeout;
    // function setSavedTimeout() {
    //     clearTimeout(timeout);
    //     timeout = setTimeout(() => setSaved(false), 3000);
    // }


    async function save() {
        setLoading(true);
        const result = await getRates(
            rates,
            placementInfo.options.taskId,
        ).catch((e) => setError(e));
        setLoading(false);
        if (result) {
            setSaved(true);
            // setSavedTimeout();
        }
    }


    return (
        <div className="d-flex g-0 justify-content-end align-items-center">
            <div className="ms-2">
                {isLoading ? (
                    <div
                        className="spinner-grow"
                        role="status"
                    >
                        <span className="visually-hidden">Loading...</span>
                    </div>
                ) : null}
            </div>
            <button
                disabled={isLoading || isSaved}
                className={`${cls.btnSave} btn text-light`}
                onClick={save}
            >
                {isSaved ? 'Сохранено' : 'Сохранить оценки'}
            </button>
        </div>
    );
}
