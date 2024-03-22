import React, { useContext } from 'react';
import { RatesContext } from '../../../utils/ratesContext';
import { getRates } from '../../../utils/saveRatesToEntity';
import { PlacementContext } from '../../../utils/placementContext';

export function SaveRatesBtn() {
    const placementInfo = useContext(PlacementContext);
    const { rates, setRates } = React.useContext(RatesContext);
    const [isSaved, setSaved] = React.useState(false);
    const [isLoading, setLoading] = React.useState(false);
    let timeout;

    function setSavedTimeout() {
        clearTimeout(timeout)
        timeout = setTimeout(() => setSaved(false), 3000);
    }

    async function save() {
        setLoading(true);
        const result = await getRates(rates, placementInfo.options.taskId);
        setLoading(false);
        if (result) {
            setSaved(true);
            setSavedTimeout();
        }
    }
    return (
        <div className="row g-0 align-items-center">
            <button
                className="btn btn-success col-3"
                onClick={save}
            >
                {isSaved ? 'Сохранено' : 'Сохранить оценки'}
            </button>
            <div className="ms-2 col-2">
                {isLoading ? (
                    <div
                        className="spinner-grow"
                        role="status"
                    >
                        <span className="visually-hidden">Loading...</span>
                    </div>
                ) : null}
            </div>
        </div>
    );
}
