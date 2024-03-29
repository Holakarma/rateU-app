import React from 'react';
import { Calendar } from 'primereact/calendar';

export function DatePicker({ id, date, setDate, minDate }) {
    function datePick(e) {
        if (e.target.value)
        setDate(new Date(e.target.value));
    }
    return (
        <>
            <label
                className="w-100"
                htmlFor={id}
            >
                {id === 'dateBegin' ? 'Дата начала' : 'Дата окончания'}
            </label>
            <Calendar
                minDate={minDate}
                className="w-100"
                inputId={id}
                showButtonBar
                locale="ru"
                dateFormat="d M yy"
                onChange={datePick}
                value={date}
            />
        </>
    );
}
