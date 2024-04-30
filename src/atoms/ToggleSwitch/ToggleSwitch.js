// Importing necessary libraries and components
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled-components for the switch
const Switch = styled.div`
  display: inline-flex;
  background-color: rgb(244, 244, 245);
  padding: 4px;
  border-radius: 8px;
  box-shadow: rgba(9, 9, 11, 0.05) 0px 2px 4px 0px inset;
  /* max-width: 216px;
  min-width: 216px; */
`;

const Option = styled.div`
  flex: 1;
  text-align: center;
  padding: 4px 12px;
  background-color: ${(props) => (props.active ? 'white' : 'transparent')};
  border-radius: 8px;
  z-index: ${(props) => (props.active ? 1 : 0)};
  color: rgb(39, 39, 42) !important;
  box-shadow: ${(props) =>
    props.active
      ? 'rgba(9, 9, 11, 0.1) 0px 1px 2px -1px, rgba(9, 9, 11, 0.1) 0px 1px 3px 0px'
      : 'none'};
  border-left: ${(props) => (props.active ? '1px solid transparent' : 0)};
  cursor: pointer;
  &:hover {
    background: ${(props) => (props.active ? 'white' : 'rgb(0, 0, 0, 0.05)')};
  }
`;

// ToggleSwitch Component
const ToggleSwitch = ({ options, value, onChange }) => {
  return (
    <Switch>
      {options.map((option) => (
        <Option
          key={option}
          active={value === option}
          onClick={() => onChange(option)}
        >
          {option}
        </Option>
      ))}
    </Switch>
  );
};

ToggleSwitch.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ToggleSwitch;
