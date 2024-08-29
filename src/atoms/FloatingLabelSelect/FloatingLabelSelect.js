// src/components/FloatingLabelSelect.js
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Styled components
const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FloatingLabel = styled.label`
  position: absolute;
  top: ${(props) => (props.isFocused || props.hasValue ? '14px' : '50%')};
  left: 12px;
  font-size: ${(props) =>
        props.isFocused || props.hasValue ? '0.8rem' : '1rem'};
  color: ${(props) => (props.isFocused ? '#4d536e' : '#6d758d')};
  transform: translateY(
    ${(props) => (props.isFocused || props.hasValue ? '-50%' : '-50%')}
  );
  letter-spacing: 1px;
  transition: all 0.2s ease-out;
  pointer-events: none;
  background: transparent;
  padding: 0 4px;
  line-height: 1.25rem;
  overflow: hidden;
  max-width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const SelectField = styled.select`
  padding: ${(props) => (props.hasLabel ? '22px 14px 10px' : '10px')};
  border: 1px solid #6d758d;
  border-radius: 4px;
  font-size: 16px;
  color: #000000;
  background-color: #fff;
  appearance: none;
  cursor: pointer;
`;

const RightPlaceholder = styled.div`
    position: absolute;
    right: 5px; 
    top: 50%;
    transform: translateY(-50%);
    padding: 5px 10px;
    border: none;
    color: white;
    border-radius: 3px;
`;

const SVGViewer = styled.svg`
    display: block; 
    fill: none;
    height: 16px; 
    width: 16px;
    stroke: black; 
    stroke-width: 4;
    overflow: visible;
`;

// Main component
const FloatingLabelSelect = ({ label, options, value, onChange }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <SelectWrapper>
            {label && (
                <FloatingLabel isFocused={isFocused} hasValue={!!value}>
                    {label}
                </FloatingLabel>
            )}
            <SelectField
                hasLabel={!!label}
                value={value}
                onChange={onChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            >
                {/* Default option to prompt user selection */}
                <option value="" disabled hidden>
                    {/* Empty option, acts as default */}
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </SelectField>
            <RightPlaceholder>
                <SVGViewer xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation"
                    focusable="false">
                    <path fill="none" d="M28 12 16.7 23.3a1 1 0 0 1-1.4 0L4 12"></path>
                </SVGViewer>
            </RightPlaceholder>

        </SelectWrapper>
    );
};

// Prop types
FloatingLabelSelect.propTypes = {
    label: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

// Default props
FloatingLabelSelect.defaultProps = {
    label: '',
};

export default FloatingLabelSelect;
