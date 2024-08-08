import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Styled container for the input and text
const Container = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: ${(props) => (props.isEditing ? '#f7f7f7' : 'transparent')};

  &:hover {
    border-color: #ccc;
    background-color: #f7f7f7;
    cursor: pointer;
  }

  &:hover .edit-icon {
    opacity: 1; // Show icon on hover
  }
`;

// Styled input for editing
const EditableInput = styled.input`
  border: none;
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  outline: none;
`;

// Styled span for displaying text
const DisplayText = styled.span`
  display: inline-block;
  padding: 8px;
`;

// Icon container for the edit icon
const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  opacity: 0; // Initially hidden
  transition: opacity 0.3s ease;
  pointer-events: none;
`;

// Main component
const HoverEditInput = ({ text, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(text);

  // Handle input blur event
  const handleBlur = () => {
    setIsEditing(false);
    onSave(inputValue);
  };

  // Handle input change event
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Container onClick={() => setIsEditing(true)} isEditing={isEditing}>
      {isEditing ? (
        <EditableInput
          type="text"
          value={inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <>
          <DisplayText>{inputValue || 'Click to edit'}</DisplayText>
          <IconContainer className="edit-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon-md"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.7929 2.79289C18.0118 1.57394 19.9882 1.57394 21.2071 2.79289C22.4261 4.01184 22.4261 5.98815 21.2071 7.20711L12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16H9C8.44772 16 8 15.5523 8 15V12C8 11.7348 8.10536 11.4804 8.29289 11.2929L16.7929 2.79289ZM19.7929 4.20711C19.355 3.7692 18.645 3.7692 18.2071 4.2071L10 12.4142V14H11.5858L19.7929 5.79289C20.2308 5.35499 20.2308 4.64501 19.7929 4.20711ZM6 5C5.44772 5 5 5.44771 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V14C19 13.4477 19.4477 13 20 13C20.5523 13 21 13.4477 21 14V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34314 4.34315 3 6 3H10C10.5523 3 11 3.44771 11 4C11 4.55228 10.5523 5 10 5H6Z"
                fill="currentColor"
              ></path>
            </svg>
          </IconContainer>
        </>
      )}
    </Container>
  );
};

HoverEditInput.propTypes = {
  text: PropTypes.string,
  onSave: PropTypes.func.isRequired,
};

HoverEditInput.defaultProps = {
  text: '',
};

export default HoverEditInput;
