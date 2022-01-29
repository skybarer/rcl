import React from 'react';
import PropTypes from 'prop-types';

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
      disabled={disabled}
      onClick={onClick}
      style={{
        backgroundColor,
        border: 'none',
        padding: '0.7rem',
        borderRadius
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

// {
//   border: none !important;
//   padding: 0.7rem;
//   font-size: 14px;
//   font-weight: 500;
//   /* line-height: 36px; */
//   color: #000000;
//   border-radius: 4px;
//   transition: background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
// }