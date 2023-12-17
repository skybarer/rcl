import React from "react";
import styled from "styled-components";

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

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <CheckboxWrapper>
      <CheckboxInput type="checkbox" checked={checked} onChange={onChange} />
      <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxWrapper>
  );
};

export default Checkbox;
