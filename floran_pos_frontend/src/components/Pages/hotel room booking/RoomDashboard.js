import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import MonthSelector from './MonthSelector';
import Table from './Table';

const RoomDashboard = () => {
  const [month, setMonth] = useState('Select Month');
  const [year, setYear] = useState('Select Year');
  const [days, setDays] = useState(null);

  return (
    <>
      <div className='container-xxl mx-auto'>
        <h1>Rooms Dashboard</h1>
        <div className='d-flex justify-content-between align-items-center py-3'>
          <div className='d-flex align-items-start'>
            <MonthSelector
              month={month}
              year={year}
              setMonth={setMonth}
              setYear={setYear}
              setDays={setDays}
            />
          </div>
          <div className='d-flex align-items-center'>
            <div className='mr-5 fs-4'>Total Rooms: 5</div>
            <div className='dropdown fs-4'>
              <button
                className='btn btn-primary dropdown-toggle'
                type='button'
                id='dropdownMenuButton'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                <i className='fas fa-plus mr-2'></i> Add Room
              </button>
              <div
                className='dropdown-menu p-3'
                aria-labelledby='dropdownMenuButton'
              >
                <form>
                  <div className='mb-3'>
                    <label className='form-label'>Room No.</label>
                    <input type='text' className='form-control' />
                  </div>
                  <button type='submit' className='btn btn-primary'>
                    Create
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='p-4 '>
          {month !== 'Select Month' ? <Table days={days} /> : ''}
        </div>
      </div>
    </>
  );
};

export default RoomDashboard;
