import React from 'react';
import { HistoryModal } from '../HistoryModal/HistoryModal';

export function RatesHistoryButton({ employee, employeeRates, criteria }) {
    const [isModalShowed, setModalShow] = React.useState(false);

    return (
        <>
            <button
                onClick={() => setModalShow(!isModalShowed)}
                className="text-light rounded border border-primary bg-primary px-2 py-1"
            >
                История
            </button>
            <HistoryModal
                criteria={criteria}
                show={isModalShowed}
                onHide={() => setModalShow(false)}
                employee={employee}
                employeeRates={employeeRates}
            />
        </>
    );
}
