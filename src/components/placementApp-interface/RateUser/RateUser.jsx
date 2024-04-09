import React, { useEffect, useContext } from 'react';
import { RateCriterion } from '../RateCriterion/RateCriterion';
import { RatesContext } from '../../../utils/ratesContext';
import { PlacementContext } from '../../../utils/placementContext';
import { UserContext } from '../../../utils/userContext';
import { ArrowDropDown } from '../../../icons/ArrowDropDown/ArrowDropDown';

export function RateUser({ userData, criteria, rights }) {
    const { rates, setRates } = React.useContext(RatesContext);
    const [rated, setRated] = React.useState(false);
    const [isRateOn, setRateOn] = React.useState(false);
    const placementInfo = React.useContext(PlacementContext);
    const userInfo = useContext(UserContext);
    const [access, setAccess] = React.useState(false);
    useEffect(() => {
        if (changeRated(rates)) setRateOn(true);
        if (userData.id !== userInfo.ID) {
            if (rights === 'haveSub') {
                setAccess(
                    userInfo.SUBORDINATES.find((sub) => userData.id == sub.ID),
                );
            } else {
                setAccess(true);
            }
        }
    }, []);

    function changeRated(rates) {
        if (
            rates.some(
                (rate) =>
                    rate.user === userData.id &&
                    rate.task == placementInfo.options.taskId,
            )
        ) {
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
                    access && setRateOn(!isRateOn);
                }}
            >
                <div className="row justify-content-between">
                    <div className="col">
                        <div className="row justify-content-between">
                            <div className="col">
                                {userData.name}
                                {rated ? (
                                    <span className="opacity-50">
                                        {' '}
                                        – оценён
                                    </span>
                                ) : null}
                            </div>
                            <div className="col text-end">
                                {!access ? (
                                    <span className="opacity-50">
                                        {' '}
                                        Недостаточно прав для оценки
                                    </span>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div className="col-1 text-end">
                        <ArrowDropDown
                            size={26}
                            active={isRateOn && access}
                        />
                    </div>
                </div>
            </div>
            {isRateOn && access ? (
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
