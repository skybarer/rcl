import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SwitchWrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const SwitchInput = styled.input`
  appearance: none;
  width: 40px;
  height: 20px;
  border-radius: 20px;
  background: ${(props) => (props.checked ? '#4caf50' : '#ccc')};
  position: relative;
  cursor: pointer;
  transition: background 0.3s ease;

  &:before {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: white;
    top: 1px;
    left: ${(props) => (props.checked ? '21px' : '1px')};
    transition: left 0.3s ease;
  }
`;

const Switch = ({ checked, onChange }) => {
    return (
        <SwitchWrapper>
            <SwitchInput type="checkbox" checked={checked} onChange={onChange} />
        </SwitchWrapper>
    );
};

Switch.propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Switch;
