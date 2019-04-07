import React from 'react';

import { DaySquareComponent } from './day-square.component';

import './week-row.component.css';

export const WeekComponent = (
    {
        days
    },
) => {
    return (
        <div
            className="week-row"
        >
            {
                days.map(
                    (day, i) => (
                        <DaySquareComponent
                            key={i}
                            day={day.day}
                            date={day.date}
                        />
                    )
                )
            }
        </div>
    );
}