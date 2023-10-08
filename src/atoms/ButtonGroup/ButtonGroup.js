import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => (props.primary ? '#007bff' : '#eeeeee')};
  color: ${(props) => (props.primary ? '#ffffff' : '#333333')};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.primary ? '#0056b3' : '#cccccc')};
  }
`;

const ButtonGroup = ({ buttons, onButtonClick }) => {
  return (
    <ButtonWrapper>
      {buttons.map((button, index) => (
        <Button key={index} primary={button.primary} onClick={() => onButtonClick(button.label)}>
          {button.label}
        </Button>
      ))}
    </ButtonWrapper>
  );
};

ButtonGroup.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      primary: PropTypes.bool,
    })
  ).isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default ButtonGroup;
