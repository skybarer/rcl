import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (
  {
    children,
    style,
    size,
    onClick,
    disabled
  }
) => {
  console.log(btn)
  return (
    <button
      // className='rcl-button'
      className={btn.red}
      disabled={disabled}
      onClick={onClick}
    // style={{ ...style }}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
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

export default Button;

