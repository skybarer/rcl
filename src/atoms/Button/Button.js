import React from "react";
import PropTypes from "prop-types";
// import './Button.css';
// import css from '../../electrons/button.module.css';

// const Button = (
//   {
//     className,
//     children,
//     style,
//     onClick,
//     disabled
//   }
// ) => {
//   return (
//     <button
//       className={className}
//       disabled={disabled}
//       onClick={onClick}
//       style={{ ...style }}
//     >
//       {children}
//     </button>
//   );
// }

// export default Button;

// src/Button.js
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ disabled }) =>
    disabled ? "rgb(225, 225, 225)" : "#000000"};
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? "rgb(225, 225, 225, 10)" : "#000000"};
    border: 1px dotted green;
  }
`;

const Button = ({ children, onClick, disabled }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  className: "rcl-button",
  onClick: undefined,
  disabled: false,
};

Button.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onClick: PropTypes.func,
  borderRadius: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
