import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Styled component for the label
const StyledLabel = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: ${({ bgColor }) => bgColor || '#e0e0e0'};
  color: ${({ color }) => color || '#333'};
  border-radius: 0.25rem;
  font-size: ${({ fontSize }) => fontSize || '1rem'};
`;

// Styled component for the icon
const IconWrapper = styled.div`
  margin-left: 0.5rem;
  position: relative;
  display: inline-block;

  &:hover .tooltip {
    opacity: 1;
    visibility: visible;
  }
`;

// Styled component for the tooltip
const Tooltip = styled.div`
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

// InfoLabel Component
const InfoLabel = ({ text, color, bgColor, fontSize, icon, tooltipText }) => {
  return (
    <StyledLabel color={color} bgColor={bgColor} fontSize={fontSize}>
      {text}
      {icon && (
        <IconWrapper>
          {icon}
          {tooltipText && <Tooltip className="tooltip">{tooltipText}</Tooltip>}
        </IconWrapper>
      )}
    </StyledLabel>
  );
};

// Prop Types for the component
InfoLabel.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  fontSize: PropTypes.string,
  icon: PropTypes.element,
  tooltipText: PropTypes.string,
};

export default InfoLabel;
