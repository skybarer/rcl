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

const Checkbox = ({ label, onCheckChange = () => { } }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    const newChecked = e.target.checked;
    setChecked(newChecked);
    onCheckChange(newChecked); // This is safe now
  };

  return (
    <CheckboxWrapper>
      <CheckboxInput
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        id="custom-checkbox"
      />
      <CheckboxLabel htmlFor="custom-checkbox">{label}</CheckboxLabel>
    </CheckboxWrapper>
  );
};

export default Checkbox;
