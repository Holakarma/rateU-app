import React, { useEffect } from 'react';
import { renderCriteria } from './renderCriteria';

export function ChooseCriteria( {criteria, setCriteria} ) {

    // useEffect(() => {
        function chooseCriteria() { 
            criteria.map((criteria) => {
                setCriteria(criteria)
        })}
    // }, [])

    // }

    // renderCriteria({criteria})
    // console.log(criteria)

    // const condition = true;

    return (
        <div>
            <button 
                onClick={chooseCriteria}
                type='button'
                className="btn btn-primary dropdown-toggle"
            >
                Выбор критериев
            </button>
            {/* {condition ? "true" : null} */}
        </div>
    )
}