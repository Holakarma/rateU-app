import React from 'react';

export function RenderCriteria({ criteria }) {

    console.log(criteria)

    // const [checkboxCriterion, setCheckboxCriterion] = React.useState(false)

    // function checkboxToggleCriterion() {
    //     setCheckboxCriterion(!checkboxCriterion)
    // }

    return (
        <ul className="dropdown-menu rounded">
            {criteria.map((criterion) => (
                <li key={criterion.ID} className="dropdown-item">
                    <input
                        className="form-check-input me-2 pe-auto"
                        type="checkbox"
                        id={`${criterion.ID}dropdownCheckbox`}
                        onChange={checkboxToggleCriterion}
                        checked={checkboxCriterion}
                    />
                    <label htmlFor={`${criterion.ID}dropdownCheckbox`}>
                        {criterion.NAME}
                    </label>
                </li>
            )
            )}
        </ul>
    )
}