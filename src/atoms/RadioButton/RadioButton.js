import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RadioButton = ({ label, value, checked, onChange, color }) => (
  <Label>
    <Input type="radio" value={value} checked={checked} onChange={onChange} />
    <Span color={color} checked={checked} />
    {label}
  </Label>
);

RadioButton.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Input = styled.input`
  display: none;
`;

const Span = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ color }) => color};
  border: 2px solid ${({ checked }) => (checked ? '#000' : '#ccc')};
  margin-right: 8px;
`;

export default RadioButton;
