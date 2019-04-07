import React from 'react';

import { DAYS_OF_THE_WEEK } from './../constants/days-of-the-week.constant';
import { MONTHS } from './../constants/months.constant';

import { WeekComponent } from './week.component';

import './month-view.component.css';

export const MonthViewComponent = (
    {
        month = 3,      // to come from redux store
        year = 2019,    // to come from redux store
    }
) => {
    const firstDay = (new Date(year, month, 1)).getDay();
    const lastDay = (new Date(year, month + 1, 0)).getDay();
    const numberOfDays = (new Date(year, month + 1, 0)).getDate();
    const dates = ([...new Array(numberOfDays)]).map(
        (day, n) => (
            {
                date: n + 1,
                day: (new Date(year, month, n + 1)).getDay(),
            }
        ),
    );

    // pad out the first of the week
    if (firstDay > 0) {
        for (let i = firstDay; i--;) {
            dates.unshift(
                {
                    date: undefined,
                    day: i,
                }
            );
        }
    }

    // pad out the last week
    if (lastDay < 6) {
        for (let i = lastDay + 1; i < 7; i++) {
            dates.push(
                {
                    date: undefined,
                    day: i,
                }
            )
        }
    }

    // chunk into weeks
    const weeks = [];
    for (let i = 0; i < dates.length; i += 7) {
        weeks.push(dates.slice(i, i + 7));
    }

    return (
        <React.Fragment>
            <h1>{ MONTHS[month] } { year }</h1>
            <div
                className="month-view"
            >
                <div
                    className="month-view__days"
                >
                    {
                        DAYS_OF_THE_WEEK.map(
                            (day, i) => (
                                <div
                                    key={i}
                                    className="month-view__day"
                                >
                                    { day }
                                </div>
                            )
                        )
                    }
                </div>
                {
                    weeks.map(
                        (week, i) => <WeekComponent
                            key={i}
                            days={week}
                        />
                    )
                }
            </div>
        </React.Fragment>
    );
}