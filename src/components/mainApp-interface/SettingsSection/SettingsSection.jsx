import React, { useEffect } from 'react';
import { CriterionInput } from './CriterionInput/CriterionInput';
import { getCriteria } from '../../../utils/getCriteria';
import { DeleteAllRates } from './DeleteAllRates/DeleteAllRates';
import { isAllowed } from '../../../utils/isAllowed';
import { ErrorContext } from '../../../utils/errorContext';

export function SettingsSection() {
    const [criteriaList, setCriteriaList] = React.useState([]);

    const setError = React.useContext(ErrorContext);

    useEffect(async () => {
        let isMounted = true;
        const answer = await getCriteria(false, true).catch((e) => setError(e));
        if (isMounted) setCriteriaList(answer);
        return () => (isMounted = false);
    });

    const [access, setAccess] = React.useState(false);
    useEffect(async () => {
        const accessValue = await isAllowed().catch((e) => setError(e));
        setAccess(accessValue);
    }, []);

    return (
        <div>
            <h3>Настройка критериев</h3>
            {criteriaList.map((criterion) => (
                <CriterionInput
                    key={criterion.ID}
                    criterion={criterion}
                    refreshHandler={(result) => setCriteriaList(result)}
                    access={access}
                />
            ))}
            {access ? (
                <CriterionInput
                    refreshHandler={(result) => setCriteriaList(result)}
                    access={access}
                />
            ) : (
                <div className="text-end fs-5">
                    Недостаточно прав для редактирования данного раздела
                </div>
            )}
            {/* <div className="row justify-content-end">
                <DeleteAllRates />
            </div> */}
        </div>
    );
}
