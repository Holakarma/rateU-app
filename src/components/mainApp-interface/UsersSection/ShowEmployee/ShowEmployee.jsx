import React, { useEffect } from 'react';
import { ShowCriterionRate } from '../ShowCriterionRate/ShowCriterionRate';
import { RatesHistoryButton } from '../RatesHistoryButton/RatesHistoryButton';

export function ShowEmployee({ employee, selectedCriteria, fetchedRates }) {
    const [countRates, setCountRates] = React.useState(0);
    const sum = React.useRef(0);
    const count = React.useRef(0);

    const [employeeRates, setEmployeeRates] = React.useState([]);

    useEffect(() => {
        sum.current = 0;
        count.current = 0;
        setCountRates(0);
        setEmployeeRates(
            fetchedRates.filter(
                (fetchedRate) =>
                    fetchedRate.PROPERTY_VALUES.USER_ID === employee.id,
            ),
        );
    }, [fetchedRates]);

    return (
        <div className="col-6">
            <div className="card position-relative h-100">
                <div className="card-body row">
                    <div className="col-2">
                        <img
                            className="rounded-circle w-100"
                            src={`https://${BX24.getDomain()}${employee.photo}`}
                        />
                    </div>
                    <div className="col-7 ps-0">
                        <h4>{employee.name}</h4>
                        <span>
                            Средний балл:
                            {countRates ? (
                                <span className="ms-1">
                                    {sum.current / count.current}
                                    <span className="opacity-50">/10</span>
                                </span>
                            ) : (
                                <i className="opacity-50 ms-1">Нет оценок</i>
                            )}
                        </span>
                    </div>
                    <div className="col-3">
                        {employeeRates.length === 0 ? null : (
                            <RatesHistoryButton
                                criteria={criteria}
                                employee={employee}
                                employeeRates={employeeRates}
                            />
                        )}
                    </div>
                    <div className="px-2 m-0 mt-2">
                        <div className="border rounded border-secondary-subtle">
                            <ul className="list-group list-group-flush gy-1">
                                {selectedCriteria.map((selectedCriterion) => (
                                    <ShowCriterionRate
                                        key={selectedCriterion.ID}
                                        employeeRates={employeeRates}
                                        criterion={selectedCriterion}
                                        employeeId={employee.id}
                                        getRate={(rate) => {
                                            count.current++;
                                            sum.current += rate;
                                            setCountRates(countRates + 1);
                                        }}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
