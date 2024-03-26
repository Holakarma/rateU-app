import React from 'react';

export function RenderCriteria({ criteria }) {

    console.log(criteria)

    return (
        <ul className="list-group list-group-flush gy-1">
            {criteria.map((criterion) =>
                <li key={criterion.ID} className="list-group-item">
                    <input
                        className="form-check-input me-2"
                        type="checkbox"

                    />
                    {criterion.NAME}
                </li>
            )}
        </ul>
    )
}