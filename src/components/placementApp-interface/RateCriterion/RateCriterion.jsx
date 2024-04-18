import React, { useEffect, useContext } from 'react';
import { RatesContext } from '../../../utils/ratesContext';
import { PlacementContext } from '../../../utils/placementContext';

export function RateCriterion({ criterion, userData, changeRated, setSaved }) {
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
                el.criterion === rateCriterion.criterion &&
                el.task === rateCriterion.task
            ) {
                rateId = id;
                return true;
            }
            return false;
        });
        return rateId;
    }

    function changeHandler(rate, comm) {
        if (rate) {
            rateCriterion.rate = rate;
        }
        if (comm) {
            rateCriterion.comm = comm;
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
        setSaved(false)
        setRates(newRates);
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
        changeRated(newRates);
    }

    const [charsLeft, setCharsLeft] = React.useState(1000);

    function inputComm(value) {
        setComm(value);
        rateCriterion.comm = value.trim();
        changeHandler(rate, value.trim());
        setCharsLeft(1000 - value.trim().length);
    }

    function toggleComm() {
        if (isCommEnabled) {
            rateCriterion.comm = '';
            setComm('');
            setCharsLeft(1000);
        }
        setCommEnabled(!isCommEnabled);
        updateRate();
        setTimeout(BX24.fitWindow, 20);
    }

    return (
        <li className="list-group-item">
            <div
                className={`row align-items-center ${isEnabled ? '' : 'opacity-50'
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
                <div className="col-3">
                    <input
                        disabled={!isEnabled}
                        value={rate}
                        onChange={(e) => {
                            setRate(parseInt(e.target.value));
                            changeHandler(parseInt(e.target.value), comm);
                        }}
                        type="range"
                        className={`form-range`}
                        min="0"
                        max="10"
                    />
                </div>

                <div className="col-2 text-body-secondary text-center">
                    {isEnabled ? <>{rate}/10</> : null}
                </div>
                <div className="col-3">
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
                        maxLength={1000}
                        className="form-control"
                        placeholder=""
                        id="floatingTextarea"
                        onInput={(e) => {
                            inputComm(e.target.value);
                        }}
                        value={comm}
                    ></textarea>
                    <label htmlFor="floatingTextarea" className="opacity-50">
                        Комментарий ({charsLeft}/1000)
                    </label>
                </div>
            ) : null}
        </li>
    );
}
