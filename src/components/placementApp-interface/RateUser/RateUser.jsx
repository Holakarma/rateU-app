import React, { useEffect } from 'react';
import { RateCriterion } from '../RateCriterion/RateCriterion';
import { RatesContext } from '../../../utils/ratesContext';

export function RateUser({ userData, criteria }) {
    const { rates, setRates } = React.useContext(RatesContext);
    const [rated, setRated] = React.useState(false);
    const [isRateOn, setRateOn] = React.useState(false);
    useEffect(() => {
        if (changeRated(rates)) setRateOn(true);
    }, []);

    function changeRated(rates) {
        if (rates.some((rate) => rate.user === userData.id)) {
            setRated(true);
            return true;
        }
        setRated(false);
        return false;
    }

    return (
        <div className="card my-2">
            <div
                className="card-header dropdown-toggle"
                role="button"
                onClick={() => {
                    setRateOn(!isRateOn);
                }}
            >
                {userData.name}{' '}
                {rated ? <span className="opacity-50">– оценён</span> : null}
            </div>
            {isRateOn ? (
                <div className="card-body">
                    <ul className="list-group">
                        {criteria.map((criterion) => (
                            <RateCriterion
                                key={criterion.ID}
                                userData={userData}
                                criterion={criterion}
                                changeRated={changeRated}
                            />
                        ))}
                    </ul>
                </div>
            ) : null}
        </div>
    );
}
