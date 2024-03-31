import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const buttonVariants = {
  'btn-primary': css`
    background-color: ${({ disabled }) =>
      disabled ? 'rgb(225, 225, 225)' : '#000000'};
    color: #fff;
  `,
  'btn-secondary': css`
    background-color: ${({ disabled }) =>
      disabled ? 'rgb(225, 225, 225)' : '#007BFF'};
    color: #fff;
  `,
  // Add more variants as needed
};

const StyledButton = styled.button`
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  ${({ variant }) => buttonVariants[variant] || buttonVariants.primary}

  &:hover {
    border: 1px dotted green;
  }
`;

const Button = ({ children, onClick, disabled, variant }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} variant={variant}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  className: 'rcl-button',
  onClick: undefined,
  disabled: false,
  variant: 'primary',
};

Button.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func,
  borderRadius: PropTypes.string,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary']), // Add more variants as needed
};

export default Button;
