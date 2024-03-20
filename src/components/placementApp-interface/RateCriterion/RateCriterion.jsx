import React, { useEffect, useContext } from 'react';
import { RatesContext } from '../../../utils/ratesContext';
import { PlacementContext } from '../../../utils/placementContext';
import { saveRates } from '../../../utils/saveRatesLS';

export function RateCriterion({ criterion, userData, changeRated }) {
    useEffect(() => {
        setTimeout(BX24.fitWindow, 20);
    }, []);
    const placementInfo = useContext(PlacementContext);
    const { rates, setRates } = React.useContext(RatesContext);
    const rateCriterion = {
        task: placementInfo.options.taskId,
        user: userData.id,
        criterion: criterion.ID,
        comm: '',
        rate: 0,
    };
    let rateId = findIndex();
    const [isEnabled, setEnable] = React.useState(rateId === -1 ? false : true);
    const [rate, setRate] = React.useState(
        rateId === -1 ? 0 : rates[rateId].rate,
    );
    const [comm, setComm] = React.useState(
        rateId === -1 ? '' : rates[rateId].comm,
    );
    const [isCommEnabled, setCommEnabled] = React.useState(
        comm === '' ? false : true,
    );

    function findIndex() {
        let rateId = -1;
        rates.find((el, id) => {
            if (
                el.user === rateCriterion.user &&
                el.criterion === rateCriterion.criterion
            ) {
                rateId = id;
                return true;
            }
            return false;
        });
        return rateId;
    }

    function changeHandler(value) {
        if (value) {
            rateCriterion.rate = value;
        }
        updateRate();
    }

    function updateRate() {
        const rateId = findIndex();
        let newRates = [...rates];
        if (rateId != -1) {
            newRates.splice(rateId, 1, rateCriterion);
        } else {
            newRates.push(rateCriterion);
        }
        setRates(newRates);
        saveRates(newRates);
        changeRated(newRates);
    }

    function toggleRate() {
        if (isEnabled) {
            setRate(0);
            deleteRate();
            if (isCommEnabled) {
                rateCriterion.comm = '';
                setComm('');
                setCommEnabled(!isCommEnabled);
            }
        } else {
            changeHandler();
        }
        setEnable(!isEnabled);
    }

    function deleteRate() {
        const rateId = findIndex();
        let newRates = [...rates];
        if (rateId != -1) {
            newRates.splice(rateId, 1);
            setRates(newRates);
        }
        saveRates(newRates);
        changeRated(newRates);
    }
    function inputComm(value) {
        setComm(value.trim());
        rateCriterion.comm = value.trim();
        changeHandler(rate);
    }

    function toggleComm() {
        if (isCommEnabled) {
            rateCriterion.comm = '';
            setComm('');
        }
        setCommEnabled(!isCommEnabled);
        updateRate();
        setTimeout(BX24.fitWindow, 20);
    }

    return (
        <li className="list-group-item">
            <div
                className={`row align-items-center ${
                    isEnabled ? '' : 'opacity-50'
                }`}
            >
                <label
                    htmlFor={`rate${rateCriterion.user}${rateCriterion.criterion}Range`}
                    className="form-label col-4 mb-0"
                >
                    <input
                        className="form-check-input me-2"
                        type="checkbox"
                        checked={isEnabled}
                        onChange={toggleRate}
                        id={`rate${rateCriterion.user}${rateCriterion.criterion}Range`}
                    />
                    {criterion.NAME}
                </label>
                <input
                    disabled={!isEnabled}
                    value={rate}
                    onChange={(e) => {
                        setRate(parseInt(e.target.value));
                        changeHandler(parseInt(e.target.value));
                    }}
                    type="range"
                    className={`form-range col `}
                    min="0"
                    max="10"
                />
                <div className="col-1 text-body-secondary text-center">
                    {isEnabled ? <>{rate}/10</> : null}
                </div>
                <div className="col-2">
                    {isEnabled ? (
                        <ins
                            style={{ cursor: 'pointer' }}
                            onClick={toggleComm}
                        >
                            Комментарий
                        </ins>
                    ) : null}
                </div>
            </div>
            {isEnabled && isCommEnabled ? (
                <div className="form-floating my-2">
                    <textarea
                        className="form-control"
                        placeholder="Leave a comment here"
                        id="floatingTextarea"
                        onInput={(e) => {
                            inputComm(e.target.value);
                        }}
                        value={comm}
                    ></textarea>
                    <label htmlFor="floatingTextarea">Комментарий</label>
                </div>
            ) : null}
        </li>
    );
}
