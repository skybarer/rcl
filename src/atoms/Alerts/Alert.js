// Alert.js
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AlertWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.375rem;
  margin: 0;
  /* border-radius: 4px; */
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
`;

const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${(props) => props.color};
`;

const Alert = ({ children, backgroundColor, color }) => {
  const [visible, setVisible] = React.useState(true);
  const closeAlert = () => {
    setVisible(false);
  };

  return (
    visible && (
      <AlertWrapper backgroundColor={backgroundColor} color={color}>
        <span>{children}</span>
        <CloseButton color={color} onClick={closeAlert}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            data-supported-dps="16x16"
            fill="currentColor"
            className="mercado-match"
            width="16"
            height="16"
            focusable="false"
          >
            <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
          </svg>
        </CloseButton>
      </AlertWrapper>
    )
  );
};

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
};

Alert.defaultProps = {
  backgroundColor: '#f44336', // default to red for error alert
  color: '#fff', // default to white text
};

export default Alert;
