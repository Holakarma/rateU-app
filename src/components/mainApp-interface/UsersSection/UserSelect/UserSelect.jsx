import React from 'react';
import { saveEmployees } from '../../../../utils/saveToLS';
import cls from '../userSection.module.css';

function usersModal() {
    return new Promise((resolve, reject) => {
        BX24.selectUsers((res) => {
            resolve(res);
        });
    });
}

export function UserSelect({ setEmployees }) {
    async function selectHandler() {
        setEmployees([]);
        const selectedEmployees = await usersModal();
        saveEmployees(selectedEmployees);
        setEmployees(selectedEmployees);
    }
    return (
        <div className="col">
            <button
                onClick={selectHandler}
                type="button"
                className={`btn dropdown-toggle text-light ${cls.bgBtn} w-100`}
            >
                Выбор сотрудников
            </button>
        </div>
    );
}
