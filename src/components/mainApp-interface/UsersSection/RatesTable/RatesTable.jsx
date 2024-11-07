import React from 'react';
import cls from './RatesTable.module.css'
import RateRow from "./RateRow";

const RatesTable = ({ employees, selectedCriteria, userRates, rights }) => {

    if (!employees.length || !selectedCriteria.length) return null;

    return (
        <table className={`${cls.table} table table-hover`} style={{ marginTop: '14px' }}>
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
                        <RateRow
                            rights={rights}
                            employee={employee}
                            userRates={userRates}
                            selectedCriteria={selectedCriteria}
                        />
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default RatesTable;