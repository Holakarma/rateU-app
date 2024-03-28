import React, { useEffect } from 'react';

export function ShowCriterionRate({
    criterion,
    employeeRates,
    employeeId,
    getRate,
}) {
    const [rate, setRate] = React.useState(-1);
    useEffect(() => {
        employeeRates = employeeRates.filter(
            (fetchedRate) =>
                fetchedRate.PROPERTY_VALUES.CRITERION_ID === criterion.ID,
        );
        if (employeeRates.length) {
            let sum = employeeRates.reduce(
                (acc, fetchedRate) =>
                    acc + parseInt(fetchedRate.PROPERTY_VALUES.RATE),
                0,
            );
            sum /= employeeRates.length;
            setRate(sum);
            getRate(sum);
        }
    }, []);
    return (
        <li className="list-group-item">
            {criterion.NAME}:
            {rate === -1 ? (
                <i className="opacity-50 ms-1">Нет оценок</i>
            ) : (
                <span className="ms-1">
                    <span
                        className={`${rate < 2 ? 'text-danger' : ''} ${
                            rate > 7 ? 'text-success' : ''
                        }`}
                    >
                        {Math.round(rate * 100) / 100}
                    </span>
                    <span className={`opacity-50`}>/10</span>
                </span>
            )}
        </li>
    );
}
