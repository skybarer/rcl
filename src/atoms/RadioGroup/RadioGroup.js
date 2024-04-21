// src/components/RadioGroup.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RadioWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const RadioButton = styled.input.attrs({ type: 'radio' })`
  margin-right: 5px;
`;

const RadioGroup = ({ options, name, value, onChange }) => (
  <RadioWrapper>
    {options.map((option) => (
      <label key={option.value}>
        <RadioButton
          name={name}
          value={option.value}
          checked={value === option.value}
          onChange={onChange}
        />
        {option.label}
      </label>
    ))}
  </RadioWrapper>
);

RadioGroup.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default RadioGroup;
