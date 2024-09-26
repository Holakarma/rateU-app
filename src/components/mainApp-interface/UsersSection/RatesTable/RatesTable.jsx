import React from 'react';
import cls from './RatesTable.module.css'

const RatesTable = ({employees, selectedCriteria}) => {

    if (!employees.length || !selectedCriteria.length) return null;

    return (
        <table className={`${cls.table} table table-striped`}>
            <thead>
            <tr>
                <th scope="col">Имя</th>
                {
                    selectedCriteria.map(criterion => (
                        <th scope="col">{criterion.NAME}</th>

                    ))
                }
            </tr>
            </thead>
            <tbody>
            {employees.map(employee => (
                <tr>
                    <th scope="row">{employee.name}</th>
                    {
                        Array.from({length: selectedCriteria.length}).map(() => (
                            <td>9.3</td>
                        ))
                    }
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default RatesTable;