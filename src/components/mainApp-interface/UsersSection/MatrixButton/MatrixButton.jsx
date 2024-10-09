import React from 'react';
import cls from '../userSection.module.css'
import { MatrixModal } from '../MatrixModal/MatrixModal';

export function MatrixButton({ employee, employeeRates, selectedCriteria }) {
    const [isModalShowed, setModalShow] = React.useState(false);

    return (
        <>
            <button
                onClick={() => setModalShow(!isModalShowed)}
                className={`${cls.bgBtn} text-light rounded px-2 py-1`}
            >
                Матрица критериев
            </button>
            <MatrixModal
                selectedCriteria={selectedCriteria}
                show={isModalShowed}
                onHide={() => setModalShow(false)}
                employee={employee}
                employeeRates={employeeRates}
            />
        </>
    );
}
