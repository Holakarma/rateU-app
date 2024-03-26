import React, { useEffect } from 'react';
import { RenderCriteria } from './renderCriteria';

export function ChooseCriteria({ criteria }) {

    const [isCriteria, setCriteria] = React.useState(false)

    // console.log(criteria)
    return (
        <div>
            <div>
                <button
                    onClick={() => setCriteria(!isCriteria)}
                    type='button'
                    className="btn btn-primary dropdown-toggle"
                >
                    Выбор критериев
                </button>
            </div>
            {
                isCriteria ?
                    <RenderCriteria criteria={criteria} /> :
                    null
            }
        </div>
    )
}