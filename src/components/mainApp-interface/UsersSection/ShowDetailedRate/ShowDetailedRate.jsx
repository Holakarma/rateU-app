import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export function ShowDetailedRate({ rate, criterion }) {
    const date = new Date(rate.TIMESTAMP_X);
    const dateCreate = new Date(rate.DATE_CREATE);
    const isChanged = date.getTime() !== dateCreate.getTime();
    const dateOptions = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    };
    const timeOptions = {
        hour: 'numeric',
        minute: 'numeric',
    };

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col">
                    {criterion.NAME}: {rate.PROPERTY_VALUES.RATE}
                    <small className="text-body-secondary">/10</small>
                </div>
                <div className="col-6">
                    {rate.PROPERTY_VALUES.COMMENT.length ? (
                        <textarea
                            className="w-100"
                            disabled
                            value={rate.PROPERTY_VALUES.COMMENT}
                            style={{ height: 'auto' }}
                        />
                    ) : null}
                </div>
                <div className="col text-end">
                    <OverlayTrigger
                        overlay={
                            <Tooltip>
                                <span>
                                    {dateCreate.toLocaleString(
                                        'ru',
                                        timeOptions,
                                    )}
                                    {isChanged ? (
                                        <div>
                                            <i>
                                                изм.:{' '}
                                                {date.toLocaleString('ru', {
                                                    ...dateOptions,
                                                    ...timeOptions,
                                                })}
                                            </i>
                                        </div>
                                    ) : (
                                        ''
                                    )}
                                </span>
                            </Tooltip>
                        }
                    >
                        <span>
                            {dateCreate.toLocaleString('ru', dateOptions)}
                        </span>
                    </OverlayTrigger>
                </div>
            </div>
        </li>
    );
}
