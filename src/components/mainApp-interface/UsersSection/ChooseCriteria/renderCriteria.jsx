import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FormCheck } from './FormCheck';
import cls from './renderCriteria.module.css'

export function RenderCriteria({ criteria }) {

    const [selectedCriteria, setSelectedCriteria] = React.useState(criteria.map((criterion) => criterion.NAME));

    const handleSaveCriteria = () => {
        const activeCriteria = criteria.filter(criterion => selectedCriteria.includes(criterion.NAME));
        console.log(activeCriteria);
    };


    return (
        <Dropdown.Menu>

            {criteria.map((criterion) =>
                <Dropdown.Item criterion={criterion} key={criterion.ID} as={FormCheck} selectedCriteria={selectedCriteria} setSelectedCriteria={setSelectedCriteria} />
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