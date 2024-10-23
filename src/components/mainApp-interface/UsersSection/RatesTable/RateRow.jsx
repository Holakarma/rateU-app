import React from 'react';
import useAccessRights from '../../../../utils/useAccessRights';

const RateRow = ({ rights, employee, userRates, selectedCriteria }) => {

    const haveAccess = useAccessRights(rights, employee);

    if (haveAccess === null) {
        return <td colSpan={selectedCriteria.length}>Загрузка...</td>
    }

    if (!haveAccess) {
        return <td colSpan={selectedCriteria.length}>Недостаточно прав</td>
    }

    return selectedCriteria.map(criterion => (
        <td
            key={criterion.ID}
        >
            {
                userRates[employee.id][criterion.ID] === -1
                    ?
                    <small className="opacity-50">нет оценок</small>
                    :
                    Number.isInteger(userRates[employee.id][criterion.ID])
                        ? userRates[employee.id][criterion.ID]
                        : userRates[employee.id][criterion.ID].toFixed(1)
            }
        </td>
    )
    );
};

export default RateRow;