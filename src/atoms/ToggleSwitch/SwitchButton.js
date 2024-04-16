// SwitchButton.js
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => (props.active ? 'white' : 'transparent')};
  border: none;
  padding: 10px 20px;
  border-radius: 0.5rem;
  outline: none;
  cursor: pointer;
  color: black;
  font-weight: bold;
  box-shadow: ${(props) =>
    props.active
      ? '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'
      : 'none'};
`;

const SwitchButton = ({ active, children, onClick }) => (
  <Button active={active} onClick={onClick}>
    {children}
  </Button>
);

SwitchButton.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SwitchButton;
