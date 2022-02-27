import React from 'react';

const RoomEdit = () => {
  return (
    <>
      <div className='container-xxl mx-auto'>
        <h1>Edit Room</h1>
        <div className='w-50 border mt-5 p-4'>
          <form>
            <div className='mb-3'>
              <label for='exampleInputEmail1' className='form-label'>
                Edit Room No.
              </label>
              <input type='text' className='form-control' />
              <div id='emailHelp' className='form-text'>
                Type the Room No. if you want to edit Room No.
              </div>
            </div>
            <div className='d-flex justify-content-between align-items-end w-75 mb-3'>
              <div>
                <label for='exampleInputEmail1' className='form-label'>
                  Add Booking Dates
                </label>
                <input type='text' className='form-control' />
                <div id='emailHelp' className='form-text'>
                  From
                </div>
              </div>
              <div>
                <input type='text' className='form-control' />
                <div id='emailHelp' className='form-text'>
                  To
                </div>
              </div>
            </div>
            <button type='submit' className='btn btn-primary'>
              Edit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RoomEdit;
