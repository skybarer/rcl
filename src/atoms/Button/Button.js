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
  'btn-success': css`
    background-color: ${({ disabled }) =>
      disabled ? 'rgb(225, 225, 225)' : '#28a745'};
    color: #fff;
  `,
  'btn-danger': css`
    background-color: ${({ disabled }) =>
      disabled ? 'rgb(225, 225, 225)' : '#dc3545'};
    color: #fff;
  `,
  'btn-warning': css`
    background-color: ${({ disabled }) =>
      disabled ? 'rgb(225, 225, 225)' : '#ffc107'};
    color: #212529;
  `,
  'btn-info': css`
    background-color: ${({ disabled }) =>
      disabled ? 'rgb(225, 225, 225)' : '#17a2b8'};
    color: #fff;
  `,
  'btn-light': css`
    background-color: ${({ disabled }) =>
      disabled ? 'rgb(225, 225, 225)' : '#f8f9fa'};
    color: #212529;
  `,
  'btn-dark': css`
    background-color: ${({ disabled }) =>
      disabled ? 'rgb(225, 225, 225)' : '#343a40'};
    color: #fff;
  `,
  'btn-outline': css`
    background-color: transparent;
    color: #000;
    border: 1px solid #000;
  `,
  // Add more variants as needed
};

const StyledButton = styled.button`
  font-size: 16px;
  font-weight: bold;
  border: 0.1px solid black;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  ${({ variant }) => buttonVariants[variant] || buttonVariants.primary}

  &:hover {
    border: 1px dotted black;
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
