import React from 'react';

import './day-square.component.css';

export const DaySquareComponent = (
    {
        day,
        date,
    }
) => {
    return (
        <article
            className={`day-square${ !date ? ' day-square--empty' : ''}`}
        >
            <h2
                className="day-square__date"
            >{ date }</h2>
        </article>
    )
}