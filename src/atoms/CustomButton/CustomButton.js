// Importing necessary libraries
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled component for the container
const ButtonContainer = styled.div`
  display: grid;
  justify-content: space-between;
  align-items: center;
  /* background-color: #e0bbe4; */
  border-radius: 12px;
  box-shadow: 0 6px 12px 0 hsla(0, 0%, 53%, 0.2);
  grid-template-columns: repeat(2, 1fr);
  height: auto;
  margin-inline: auto;
  padding: 6px;
  position: relative;
  width: 259px;
  z-index: 1;
  border: 1px #e0bbe4;
`;

// Styled component for the text
const Text = styled.span`
  all: unset;
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border-radius: 8px;
  cursor: pointer;
  font-family: futura-medium;
  font-size: 18px;
  line-height: 22px;
  padding: 10px 0;
  text-align: center;
  z-index: 1;
`;

// React component using styled-components
const CustomButton = ({
  primaryText,
  secondaryText,
  primarySize,
  secondarySize,
}) => (
  <ButtonContainer>
    <Text size={primarySize} backgroundColor="#6300a3" color="white">
      {primaryText}
    </Text>
    <Text size={secondarySize} color="#6300a3">
      {secondaryText}
    </Text>
  </ButtonContainer>
);

// Defining propTypes for type checking
CustomButton.propTypes = {
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
  primarySize: PropTypes.number,
  secondarySize: PropTypes.number,
};

// Defining defaultProps in case no props are passed
CustomButton.defaultProps = {
  primarySize: 14,
  secondarySize: 14,
};

export default CustomButton;
