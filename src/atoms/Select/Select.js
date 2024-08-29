// src/components/Select.js
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled Components
const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  appearance: none;
  font-size: 16px;
  cursor: pointer;
  letter-spacing: 0.3px;
  font-weight: 400;
  background-color: white;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const DropdownIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 12px;
  pointer-events: none;
  transform: translateY(-50%);
`;

// Component
const Select = ({ options, onChange, value, placeholder }) => (
    <SelectWrapper>
        <StyledSelect onChange={onChange} value={value}>
            <option value="" disabled>{placeholder}</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </StyledSelect>
        <DropdownIcon>▼</DropdownIcon>
    </SelectWrapper>
);

// PropTypes
Select.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
};

Select.defaultProps = {
    value: '',
    placeholder: 'Select an option',
};

export default Select;
