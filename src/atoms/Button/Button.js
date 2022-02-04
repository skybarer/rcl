import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export const Button = (
  {
    children,
    style,
    backgroundColor = 'aliceblue',
    onClick,
    borderRadius = '4px',
    disabled = false
  }
) => {
  return (
    <button
      className='rcl-button1'
      disabled={disabled}
      onClick={onClick}
      style={{
        backgroundColor,
        padding: '0.7rem',
        ...style
      }}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
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

