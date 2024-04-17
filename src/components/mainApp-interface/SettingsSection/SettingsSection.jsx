import React, { useEffect } from 'react';
import { CriterionInput } from './CriterionInput/CriterionInput';
import { getCriteria } from '../../../utils/getCriteria';
import { isAllowed } from '../../../utils/isAllowed';
import { ErrorContext } from '../../../utils/errorContext';
import { Help } from '../../../icons/Help/Help';
import { HelpModal } from './HelpModal/HelpModal';

export function SettingsSection() {
    const [criteriaList, setCriteriaList] = React.useState([]);

    const setError = React.useContext(ErrorContext);

    useEffect(async () => {
        let isMounted = true;
        const answer = await getCriteria(false, true).catch((e) => setError(e));
        if (isMounted) setCriteriaList(answer);
        return () => (isMounted = false);
    }, []);

    const [access, setAccess] = React.useState(false);
    useEffect(async () => {
        const accessValue = await isAllowed().catch((e) => setError(e));
        setAccess(accessValue);
    }, []);

    const [showHelp, setShowHelp] = React.useState(false);

    return (
        <div>
            <h3>
                Настройка критериев{' '}
                <button
                    className="btn opacity-50"
                    onClick={() => setShowHelp(true)}
                >
                    <Help size={25} />
                </button>
            </h3>
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
            <HelpModal
                showHelp={showHelp}
                setShowHelp={setShowHelp}
            />
        </div>
    );
}
