import React, { useEffect } from 'react';
import { RateCriterion } from '../RateCriterion/RateCriterion';
import { RatesContext } from '../../../utils/ratesContext';
import { ArrowDropDown } from '../../../icons/ArrowDropDown/ArrowDropDown';

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
                className="card-header"
                role="button"
                onClick={() => {
                    setRateOn(!isRateOn);
                }}
            >
                <div className="row justify-content-between">
                    <div className="col">
                        {userData.name}
                        {rated ? (
                            <span className="opacity-50"> – оценён</span>
                        ) : null}
                    </div>
                    <div className="col-1 text-end">
                        <ArrowDropDown size={26} active={isRateOn}/>
                    </div>
                </div>
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
