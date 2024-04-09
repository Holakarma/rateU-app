import React from 'react';
import { HistoryModal } from '../HistoryModal/HistoryModal';
import cls from '../userSection.module.css'

export function RatesHistoryButton({ employee, employeeRates, criteria }) {
    const [isModalShowed, setModalShow] = React.useState(false);

    return (
        <>
            <button
                onClick={() => setModalShow(!isModalShowed)}
                className={`${cls.bgBtn} text-light rounded px-2 py-1`}
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
