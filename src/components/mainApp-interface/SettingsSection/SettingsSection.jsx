import React, { useEffect } from 'react';
import { CriterionInput } from './CriterionInput/CriterionInput';
import { getCriteria } from '../../../utils/getCriteria';
import { DeleteAllRates } from './DeleteAllRates/DeleteAllRates';

export function SettingsSection() {
    const [criteriaList, setCriteriaList] = React.useState([]);
    useEffect(async () => {
        const answer = await getCriteria(false, true);
        setCriteriaList(answer);
    });
    return (
        <div>
            <h4>Настройка критериев</h4>
            {criteriaList.map((criterion) => (
                <CriterionInput
                    key={criterion.ID}
                    criterion={criterion}
                    refreshHandler={(result) => setCriteriaList(result)}
                />
            ))}
            <CriterionInput
                refreshHandler={(result) => setCriteriaList(result)}
            />
            <div className="row justify-content-end">
                <DeleteAllRates />
            </div>
        </div>
    );
}
