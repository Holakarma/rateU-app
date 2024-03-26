import React from 'react';
import { ShowCriterionRate } from '../ShowCriterionRate/ShowCriterionRate';
// import cls from './showEmployee.module.css'

export function ShowEmployee({ employee, criteria, fetchedRates }) {
    const domain = window.location.hostname;

    const [sumRates, setSumRates] = React.useState(0);
    const sum = React.useRef(0);
    const [countRates, setCountRates] = React.useState(0);

    return (
        <div className="col-6">
            <div className="card mt-2 position-relative h-100">
                <div className="card-body row">
                    <div className="col-2">
                        <img
                            className="rounded-circle w-100"
                            src={`https://avtorit24.ru${employee.photo}`}
                        />
                        {/* <img className='rounded-circle w-100' src={`https://${domain}${employee.photo}`}/> RELEASE */}
                    </div>
                    <div className="col-7 ps-0">
                        <h4>{employee.name}</h4>
                        <span>
                            Средний балл:{' '}
                            {countRates ? (
                                <span>
                                    {Math.round(
                                        (sumRates * 100) / (countRates + 1),
                                    ) / 100}
                                    <span className='opacity-50'>/10</span>
                                </span>
                            ) : (
                                <i className='opacity-50'>Нет оценок</i>
                            )}
                        </span>
                    </div>
                    <div className="col-3">
                        <button className="text-light rounded border border-primary bg-primary px-2 py-1">
                            История
                        </button>
                    </div>
                    <div className="px-2 m-0 mt-2">
                        <div className="border rounded border-secondary-subtle">
                            <ul className="list-group list-group-flush gy-1">
                                {criteria.map((criterion) => (
                                    <ShowCriterionRate
                                        key={criterion.ID}
                                        fetchedRates={fetchedRates}
                                        criterion={criterion}
                                        employeeId={employee.id}
                                        getRate={(rate) => {
                                            sum.current += rate;
                                            setSumRates(sum.current);
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
