import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';
import css from '../../electrons/button.module.css';

const Button = (
  {
    children,
    style,
    size,
    onClick,
    disabled
  }
) => {  
  return (
    <button
      className={css.buttton}
      // className='rcl-button'
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

