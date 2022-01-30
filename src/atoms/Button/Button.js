import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export const Button = (
  {
    label = 'button',
    backgroundColor = 'aliceblue',
    onClick,
    borderRadius = '4px',
    disabled = false
  }
) => {
  return (
    <button
      className='rcl-button'
      disabled={disabled}
      onClick={onClick}
      style={{
        backgroundColor,
        padding: '0.7rem',
      }}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func,
  borderRadius: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
  disabled: false
};

