import { element } from 'prop-types';
import React from 'react';

const MonthSelector = ({ month, year, setMonth, setYear, setDays }) => {
  return (
    <>
      <div className='dropdown fs-4'>
        Year:{' '}
        <button
          className='btn btn-info dropdown-toggle'
          type='button'
          id='dropdownMenuButton'
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded='false'
        >
          {year}
        </button>
        <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
          {Object.keys(data).map((keyName, i) => (
            <div
              className='dropdown-item'
              onClick={(e) => setYear(e.target.innerHTML)}
            >
              {keyName}
            </div>
          ))}
        </div>
      </div>
      <div className='dropdown fs-4 ml-4'>
        Month:{' '}
        <button
          className='btn btn-info dropdown-toggle'
          type='button'
          id='dropdownMenuButton'
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded='false'
        >
          {month}
        </button>
        <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
          {year != 'Select Year'
            ? data[year].map((month) => {
                return (
                  <div
                    className='dropdown-item'
                    onClick={(e) => {
                      setMonth(e.target.innerHTML);
                      setDays(month.days);
                    }}
                  >
                    {month.month}
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};

const data = {
  2021: [
    {
      month: 'January',
      days: 31,
    },
    {
      month: 'February',
      days: 28,
    },
    {
      month: 'March',
      days: 31,
    },
    {
      month: 'April',
      days: 30,
    },
    {
      month: 'May',
      days: 31,
    },
    {
      month: 'June',
      days: 30,
    },
    {
      month: 'July',
      days: 31,
    },
    {
      month: 'August',
      days: 31,
    },
    {
      month: 'September',
      days: 30,
    },
    {
      month: 'October',
      days: 31,
    },
    {
      month: 'November',
      days: 30,
    },
    {
      month: 'December',
      days: 31,
    },
  ],
  2022: [
    {
      month: 'January',
      days: 31,
    },
    {
      month: 'February',
      days: 28,
    },
    {
      month: 'March',
      days: 31,
    },
    {
      month: 'April',
      days: 30,
    },
    {
      month: 'May',
      days: 31,
    },
    {
      month: 'June',
      days: 30,
    },
    {
      month: 'July',
      days: 31,
    },
    {
      month: 'August',
      days: 31,
    },
    {
      month: 'September',
      days: 30,
    },
    {
      month: 'October',
      days: 31,
    },
    {
      month: 'November',
      days: 30,
    },
    {
      month: 'December',
      days: 31,
    },
  ],
  2023: [
    {
      month: 'January',
      days: 31,
    },
    {
      month: 'February',
      days: 28,
    },
    {
      month: 'March',
      days: 31,
    },
    {
      month: 'April',
      days: 30,
    },
    {
      month: 'May',
      days: 31,
    },
    {
      month: 'June',
      days: 30,
    },
    {
      month: 'July',
      days: 31,
    },
    {
      month: 'August',
      days: 31,
    },
    {
      month: 'September',
      days: 30,
    },
    {
      month: 'October',
      days: 31,
    },
    {
      month: 'November',
      days: 30,
    },
    {
      month: 'December',
      days: 31,
    },
  ],
  2024: [
    {
      month: 'January',
      days: 31,
    },
    {
      month: 'February',
      days: 29,
    },
    {
      month: 'March',
      days: 31,
    },
    {
      month: 'April',
      days: 30,
    },
    {
      month: 'May',
      days: 31,
    },
    {
      month: 'June',
      days: 30,
    },
    {
      month: 'July',
      days: 31,
    },
    {
      month: 'August',
      days: 31,
    },
    {
      month: 'September',
      days: 30,
    },
    {
      month: 'October',
      days: 31,
    },
    {
      month: 'November',
      days: 30,
    },
    {
      month: 'December',
      days: 31,
    },
  ],
};

export default MonthSelector;
