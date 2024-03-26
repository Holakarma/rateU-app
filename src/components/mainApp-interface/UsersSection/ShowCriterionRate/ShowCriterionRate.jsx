import React, { useEffect } from 'react';

export function ShowCriterionRate({ criterion, fetchedRates, employeeId, getRate }) {
    const [rate, setRate] = React.useState(-1);
    useEffect(() => {
        fetchedRates = fetchedRates.filter(
            (fetchedRate) =>
                fetchedRate.PROPERTY_VALUES.CRITERION_ID === criterion.ID &&
                fetchedRate.PROPERTY_VALUES.USER_ID === employeeId,
        );
        if (fetchedRates.length) {
            let sum = 0;
            fetchedRates.map((fetchedRate) => {
                sum += fetchedRate.PROPERTY_VALUES.RATE;
            });
            sum /= Math.round(fetchedRates.length*100)/100;
            setRate(sum);
            getRate(sum);
        }
    }, []);
    return (
        <li className="list-group-item">
            {criterion.NAME}:{' '}
            {rate === -1 ? (
                <i className="opacity-75">Нет оценок</i>
            ) : (
                <span>
                    <span className={`${rate < 2 ? 'text-danger' : ''} ${rate > 7 ? 'text-success' : ''}`}>{rate}</span>
                    <span className={`opacity-50`}>/10</span>
                </span>
            )}
        </li>
    );
}
