// Importing necessary libraries and components
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

export const TextInput = styled.input`
  padding: 10px;
  padding-right: 40px; // Space for the button
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

export const InnerButton = styled.button`
  position: absolute;
  right: 5px; // Adjust position within the input
  top: 50%;
  transform: translateY(-50%);
  padding: 5px 10px;
  border: none;
  background-color: #3498db;
  color: white;
  border-radius: 3px;

  &:hover {
    background-color: #2980b9;
  }
`;

// Styled-components
// const InputGroup = styled.div`
//   display: flex;
//   width: 100%;
//   justify-content: space-between;
//   align-items: center;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   box-sizing: border-box;
//   background-color: transparent;
//   caret-color: black;
//   color: black;
//   margin: 0;
//   padding: 0.6875rem;
// `;

// const Button = styled.button`
//   display: inline-flex;
//   height: 1.25rem;
//   background-color: transparent;
//   color: black;
//   padding: 0px 0.6875rem 0px, 0px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: 16px;
//   text-decoration: underline;
// `;

// const Input = styled.input`
//   flex-grow: 1;
//   font-size: 16px;
//   border: none;
//   padding: 0 !important;
//   &:focus-visible {
//     border: none !important;
//   }
// `;

// React component
class InlineAction extends React.Component {
  state = {
    inputValue: '',
  };

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    const { placeholder, buttonLabel, onButtonClick } = this.props;
    const { inputValue } = this.state;

    return (
      <InputContainer>
        <TextInput type="text" placeholder={placeholder} />
        <InnerButton onClick={onButtonClick}>{buttonLabel}</InnerButton>
      </InputContainer>
    );
  }
}

// PropTypes
InlineAction.propTypes = {
  action: PropTypes.func.isRequired,
  buttonLabel: PropTypes.string.isRequired,
};

export default InlineAction;
