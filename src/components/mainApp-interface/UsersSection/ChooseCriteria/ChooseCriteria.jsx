import React from 'react';
import { RenderCriteria } from './RenderCriteria';
import { Dropdown } from 'react-bootstrap';

export function ChooseCriteria({ criteria }) {
    return (
        <div className="col">
            <Dropdown autoClose="outside">
                <Dropdown.Toggle
                    className="position-relative w-100"
                    id="dropdown-autoclose-outside"
                >
                    Выбор критериев
                </Dropdown.Toggle>
                <RenderCriteria criteria={criteria} />
            </Dropdown>
        </div>
    );
}
