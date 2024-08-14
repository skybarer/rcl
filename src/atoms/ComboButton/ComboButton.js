import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled components
const Button = styled.button`
  /* background-color: ${(props) => (props.primary ? '#007bff' : '#6c757d')}; */
  background-color: white;
  color: black;
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid #dadce0;
  box-shadow: insert 0 0 0 1px #dadce0;

  &:hover {
    background-color: white;
    /* background-color: ${(props) =>
      props.primary ? '#0056b3' : '#5a6268'}; */
  }
`;

const Icon = styled.span`
  border-left: 1px solid #dadce0;
  margin-left: 12px;
  padding-left: 4px;
`;

// ComboButton Component
const ComboButton = ({ icon, label, primary }) => {
  return (
    <Button primary={primary}>
      {label}
      <Icon>
        {icon && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            widht={24}
            height={24}
          >
            <path
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M6 8l4 4 4-4"
            />
          </svg>
        )}
      </Icon>
    </Button>
  );
};

ComboButton.propTypes = {
  icon: PropTypes.element,
  label: PropTypes.string.isRequired,
  primary: PropTypes.bool,
};

ComboButton.defaultProps = {
  primary: false,
};

export default ComboButton;
