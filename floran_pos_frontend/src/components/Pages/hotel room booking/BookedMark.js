import React from 'react';

const BookedMark = () => {
  return (
    <td className='p-2'>
      <div
        style={{
          minWidth: '50px',
          height: '50px',
        }}
        className='d-flex bg-light rounded-3 justify-content-center p-0 overflow-hidden border'
      >
        <div style={{ width: '10px' }} className='bg-danger'></div>
        <div className='p-3'>Booked</div>
      </div>
    </td>
  );
};

export default BookedMark;
