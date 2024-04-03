import React, { useEffect } from 'react';
import { DatePicker } from '../DatePicker/DatePicker';
import cls from '../ChooseCriteria/renderCriteria.module.css'

import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';

export function PeriodPicker({ setPeriod, period }) {
    const [dateBegin, setDateBegin] = React.useState(period?.dateBegin ? new Date(period?.dateBegin) : null);
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const [dateEnd, setDateEnd] = React.useState(tomorrow);

    useEffect(() => {
        setPeriod({
            dateBegin: dateBegin,
            dateEnd: dateEnd,
        });
    }, []);

    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <DatePicker
                            id={'dateBegin'}
                            date={dateBegin}
                            setDate={setDateBegin}
                            maxDate={dateEnd}
                        />
                    </div>
                    <div className="col">
                        <DatePicker
                            id={'dateEnd'}
                            date={dateEnd}
                            setDate={setDateEnd}
                            minDate={dateBegin}
                        />
                    </div>
                    <div className="col-3">
                        <button
                            className={`btn ${cls.btnSave} text-light w-100 mb-1`}
                            onClick={() => {
                                setPeriod({
                                    dateBegin,
                                    dateEnd,
                                });
                            }}
                        >
                            Сохранить
                        </button>
                        <button
                            className={`btn ${cls.btnReset} text-light w-100`}
                            onClick={() => {
                                setDateBegin(null);
                                setDateEnd(null);
                                setPeriod({
                                    dateBegin: dateBegin,
                                    dateEnd: dateEnd,
                                });
                            }}
                        >
                            Сбросить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
