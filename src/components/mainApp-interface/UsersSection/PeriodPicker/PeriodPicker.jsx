import React from 'react';
import { DatePicker } from '../DatePicker/DatePicker';

import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';

export function PeriodPicker({ setPeriod }) {
    const [dateBegin, setDateBegin] = React.useState(null);
    const [dateEnd, setDateEnd] = React.useState(null);

    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <DatePicker
                            id={'dateBegin'}
                            date={dateBegin}
                            setDate={setDateBegin}
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
                            className="btn btn-success w-100 mb-1"
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
                            className="btn btn-danger w-100"
                            onClick={() => {
                                setDateBegin(null);
                                setDateEnd(null);
                                setPeriod({
                                    datebegin: null,
                                    dateEnd: null,
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
