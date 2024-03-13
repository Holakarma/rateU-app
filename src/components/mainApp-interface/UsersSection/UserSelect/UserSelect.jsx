import React from 'react';

export function UserSelect() {
    function selectHandler() {
        BX24.selectUsers((res) => {
            console.log(res)
        })
    }
    return (
        <button
            onClick={selectHandler}
            type="button"
            className="btn btn-primary dropdown-toggle"
        >
            Выбор сотрудников
        </button>
    );
}
