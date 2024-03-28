import React from 'react';
import { RenderCriteria } from './RenderCriteria';
import { Dropdown } from 'react-bootstrap';

export function ChooseCriteria({ criteria }) {

    return (
        <div>
            <Dropdown autoClose="outside">
                <Dropdown.Toggle
                    className="position-relative"
                    id="dropdown-autoclose-outside"
                >
                    Выбор критериев
                </Dropdown.Toggle>
                <RenderCriteria criteria={criteria} />
            </Dropdown>
        </div>
    )
}