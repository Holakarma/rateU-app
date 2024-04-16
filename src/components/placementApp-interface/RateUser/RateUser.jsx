import React, { useEffect, useContext } from 'react';
import { RateCriterion } from '../RateCriterion/RateCriterion';
import { RatesContext } from '../../../utils/ratesContext';
import { PlacementContext } from '../../../utils/placementContext';
import { UserContext } from '../../../utils/userContext';
import { ArrowDropDown } from '../../../icons/ArrowDropDown/ArrowDropDown';
import { getUsers } from '../../../utils/createSavedUsers';
import { ErrorContext } from '../../../utils/errorContext';

export function RateUser({ userData, criteria, rights, setSaved }) {
    const { rates, setRates } = useContext(RatesContext);
    const [rated, setRated] = React.useState(false);
    const [isRateOn, setRateOn] = React.useState(false);
    const placementInfo = useContext(PlacementContext);
    const userInfo = useContext(UserContext);
    const [access, setAccess] = React.useState(false);
    const [genderUser, setGenderUser] = React.useState('M')
    const setError = useContext(ErrorContext);

    useEffect(async () => {
        try {
            const listIdUsers = await getUsers([userData.id]);
            listIdUsers.map((res) => {
                setGenderUser(res.PERSONAL_GENDER)
            })
        } catch (e) {
            setError(e)
        }
    }, []);

    useEffect(async () => {
        if (changeRated(rates)) setRateOn(true);
        const currentUSer = await userInfo;
        if (userData.id !== currentUSer.ID) {
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
                                        {genderUser === 'F'
                                            ? '- оценена'
                                            : '- оценён'}
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
                                setSaved={setSaved}
                            />
                        ))}
                    </ul>
                </div>
            ) : null}
        </div>
    );
}
