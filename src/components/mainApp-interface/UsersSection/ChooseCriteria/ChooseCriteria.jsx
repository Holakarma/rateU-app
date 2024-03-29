import React from 'react';
import { RenderCriteria } from './RenderCriteria';
import { Dropdown } from 'react-bootstrap';
import cls from './renderCriteria.module.css'

export function ChooseCriteria({ criteria }) {
    return (

        <>
            {
                criteria.length ?
                    <div className="col">
                        <Dropdown autoClose="outside">
                            <Dropdown.Toggle
                                className={`position-relative ${cls.bgBtn} w-100`}
                                id="dropdown-autoclose-outside"
                            >
                                Выбор критериев
                            </Dropdown.Toggle>
                            <RenderCriteria criteria={criteria} />
                        </Dropdown>
                    </div> :
                    null
            }
        </>
    )
}