import React from 'react';
import { saveEmployees } from '../../../../utils/saveEmployeesLS';

export function UserSelect({ setEmployees }) {
    function selectHandler() {
        setEmployees([]);
        BX24.selectUsers((res) => {
            console.log(res);
            saveEmployees(res);
            setEmployees(res);
        });
    }
    return (
        <div className="col">
            <button
                onClick={selectHandler}
                type="button"
                className="btn btn-primary dropdown-toggle w-100"
            >
                Выбор сотрудников
            </button>
        </div>
    );
}
