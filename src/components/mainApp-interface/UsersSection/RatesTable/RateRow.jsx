import React, {useEffect} from 'react';
import {getUserInfo} from "../../../../utils/getUserInfo";

const RateRow = ({rights, employee, userRates, selectedCriteria}) => {

    const [haveAccess, setHaveAccess] = React.useState(null);

    const isHaveAccess = async (rights, employee) => {
        switch (rights) {
            case 'isAdmin':
                return true;
            case 'haveSub':
                const subordinates = (await getUserInfo()).SUBORDINATES.map(
                    (sub) => sub.ID,
                );
                return !!subordinates.includes(employee.id);
            default:
                return false;
        }
    }

    useEffect(() => {
        (async () => {
            setHaveAccess(await isHaveAccess(rights, employee));
        })();
    }, [rights]);

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
                        userRates[employee.id][criterion.ID]
                }
            </td>
        )
    );
};

export default RateRow;