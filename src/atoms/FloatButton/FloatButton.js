// src/components/FloatButton.js
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled component for the button
const StyledButton = styled.button`
  position: fixed;
  bottom: ${(props) => props.bottom || '20px'};
  right: ${(props) => props.right || '20px'};
  background-color: ${(props) => props.bgColor || '#007bff'};
  color: ${(props) => props.color || '#fff'};
  border: none;
  border-radius: 50%;
  width: ${(props) => props.size || '50px'};
  height: ${(props) => props.size || '50px'};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const FloatButton = ({
  icon,
  onClick,
  bgColor,
  color,
  size,
  bottom,
  right,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      bgColor={bgColor}
      color={color}
      size={size}
      bottom={bottom}
      right={right}
    >
      {icon}
    </StyledButton>
  );
};

FloatButton.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  bottom: PropTypes.string,
  right: PropTypes.string,
};

FloatButton.defaultProps = {
  onClick: () => {},
  bgColor: '#007bff',
  color: '#fff',
  size: '50px',
  bottom: '20px',
  right: '20px',
};

export default FloatButton;
