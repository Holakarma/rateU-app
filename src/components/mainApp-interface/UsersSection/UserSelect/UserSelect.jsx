import React from 'react';

export function UserSelect({ setEmployees }) {

    function selectHandler() {
        setEmployees([])
        BX24.selectUsers((res) => {
            // console.log(res)
            setEmployees(res)
        })
    }
    return (
        <div>
            <button
                onClick={selectHandler}
                type="button"
                className="btn btn-primary dropdown-toggle"
            >
                Выбор сотрудников
            </button>
        </div>
    );
}

