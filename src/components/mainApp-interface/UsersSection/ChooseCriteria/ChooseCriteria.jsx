import React from 'react';
import { RenderCriteria } from './RenderCriteria';
import { Dropdown } from 'react-bootstrap';
import cls from '../userSection.module.css'

export function ChooseCriteria({ criteria, setSelectedCriteria }) {
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
                            <RenderCriteria
                                criteria={criteria}
                                setSelectedCriteria={setSelectedCriteria}
                            />
                        </Dropdown>
                    </div> :
                    null
            }
        </>
    )
}