import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FormCheck } from './FormCheck';
import cls from './renderCriteria.module.css'

export function RenderCriteria({ criteria, setSelectedCriteria }) {

    const [activetedCriteria, setActivetedCriteria] = React.useState(criteria);

    const handleSaveCriteria = () => {
        const activeCriteria = activetedCriteria;
    };

    setSelectedCriteria(activetedCriteria)

    return (
        <Dropdown.Menu>

            {criteria.map((criterion) =>
                <Dropdown.Item
                    key={criterion.ID}
                    as={FormCheck}
                    criterion={criterion}
                    setActivetedCriteria={setActivetedCriteria}
                />
            )}

            <Dropdown.Item key='buttonSaveListCriteria' className={`${cls.criteriaDropdownBtn} d-flex justify-content-center`}>
                <button
                    type='button'
                    className={`btn ${cls.bgBtn} border border-opacity-50 text-light`}
                    onClick={handleSaveCriteria}
                >
                    Сохранить
                </button>
            </Dropdown.Item>

        </Dropdown.Menu>
    )
}