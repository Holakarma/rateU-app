import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FormCheck } from './FormCheck';
import cls from './renderCriteria.module.css'

export function RenderCriteria({ criteria }) {

    return (
        <Dropdown.Menu>

            {criteria.map((criterion) =>
                <Dropdown.Item criterion={criterion} key={criterion.ID} as={FormCheck} />
            )}

            <Dropdown.Item key='buttonSaveListCriteria' className={`${cls.criteriaDropdownBtn} d-flex justify-content-center`}>
                <button
                    type='button'
                    className={`btn bg-success-subtle hover-overlay mask ${cls.bgBtn} border border-opacity-50 text-light`}
                >
                    Сохранить
                </button>
            </Dropdown.Item>

        </Dropdown.Menu>
    )
}