import React, { useEffect } from 'react';


/* BX24.callMethod('entity.get', {NAME: 'rateU-app'}, res => {
    console.log(res)
}) */


export function RateCriterion({ criterion, userData }) {
    useEffect(() => {
        setTimeout(BX24.fitWindow, 200);
        
    });


    const [rate, setRate] = React.useState(0);

    return (
        <li className="list-group-item">
            <div className="row">
                <label
                    htmlFor={`rate${criterion.ID}Range`}
                    className="form-label col-3 mb-0"
                >
                    {criterion.NAME}
                </label>
                <input
                    value={rate}
                    onChange={(e) => {
                        setRate(parseInt(e.target.value));
                    }}
                    type="range"
                    className="form-range col"
                    min="0"
                    max="10"
                    id={`rate${criterion.ID}Range`}
                />
                <div className="col-1 text-body-secondary text-center">{rate}/10</div>
            </div>
        </li>
    );
}
