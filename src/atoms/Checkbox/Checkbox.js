import React, { useState } from 'react';
import styled from 'styled-components';

const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const CheckboxInput = styled.input`
  margin-right: 8px;
`;

const CheckboxLabel = styled.span`
  font-size: 16px;
`;

const Checkbox = ({ label, onCheckChange }) => {
  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onCheckChange && onCheckChange(newChecked);
  };
  return (
    <CheckboxWrapper onClick={handleClick}>
      <CheckboxInput type="checkbox" checked={checked} readOnly />
      <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxWrapper>
  );
};

export default Checkbox;
