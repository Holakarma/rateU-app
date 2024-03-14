import React from 'react';
import { RateCriterion } from '../RateCriterion/RateCriterion';

export function RateUser({ userData, criteria }) {
    return (
        <div className="card my-2">
            <div className="card-header">{userData.name}</div>
            <div className="card-body ">
                <ul className="list-group">
                    {criteria.map((criterion) => (
                        <RateCriterion
                            key={criterion.ID}
                            userData={userData}
                            criterion={criterion}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}
