import React from 'react';
import useAccessRights from '../../../../utils/useAccessRights';

const RateRow = ({ rights, employee, userRates, selectedCriteria }) => {

    function renderRating(userRate) {
        if (userRate !== undefined) {
            return Number.isInteger(userRate)
                ? userRate
                : userRate.toFixed(1);
        } else {
            return <small className="opacity-50">нет оценок</small>;
        }
    }

    function backgroundColor(rate) {
        if (rate > 7) {
            return '#d7f1d7';
        } else if (rate < 3) {
            return '#f1d7d7';
        }
    }

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
            style={{ backgroundColor: backgroundColor(userRates[employee.id][criterion.ID]) }}
        >
            {renderRating(userRates[employee.id][criterion.ID])}
        </td>
    )
    );
};

export default RateRow;