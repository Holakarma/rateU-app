import React from 'react';
import cls from './RatesTable.module.css'
import deepEqual from "../../../../utils/deepEqual";

const RatesTable = ({employees, selectedCriteria, userRates} ) => {

    if (!employees.length || !selectedCriteria.length) return null;

    return (
        <table className={`${cls.table} table table-striped`}>
            <thead>
            <tr>
                <th scope="col">Имя</th>
                {
                    selectedCriteria.map(criterion => (
                        <th scope="col" key={criterion.ID}>{criterion.NAME}</th>
                    ))
                }
            </tr>
            </thead>
            <tbody>
            {employees.map(employee => (
                <tr key={employee.id}>
                    <th scope="row">{employee.name}</th>
                    {
                        selectedCriteria.map(criterion => (
                                <td
                                    key={criterion.ID}
                                >
                                    {
                                        userRates[employee.id][criterion.ID] === -1
                                        ?
                                        <small className="opacity-50">нет оценок</small>
                                        :
                                        userRates[employee.id][criterion.ID]
                                    }
                                </td>
                            )
                        )
                    }
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default RatesTable;