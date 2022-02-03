import React from 'react';
import PropTypes from 'prop-types';
import './Close.css'

export default function Close() {
  return (
    <span
      className='rcl-close'
      style={{
        color: 'black',
        display: 'inline-flex',
        float: 'right',
      }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
        <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
      </svg>
    </span>
  );
}

Close.propTypes = {
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
};

Close.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
};
