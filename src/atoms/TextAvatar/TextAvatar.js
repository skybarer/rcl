// src/components/TextAvatar.js
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const getBorderRadius = (variant) => {
  switch (variant) {
    case 'circle':
      return '50%';
    case 'square':
      return '0';
    case 'rounded-square':
      return '10%';
    default:
      return '50%'; // Default to circle if variant is not specified
  }
};

const AvatarWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor || '#cccccc'};
  color: ${({ textColor }) => textColor || '#ffffff'};
  font-size: ${({ fontSize }) => fontSize || '1.2em'};
  font-weight: bold;
  width: ${({ size }) => size || '40px'};
  height: ${({ size }) => size || '40px'};
  border-radius: ${({ variant }) => getBorderRadius(variant)};
  text-transform: uppercase;
`;

const TextAvatar = ({
  initials,
  size,
  variant,
  bgColor,
  textColor,
  fontSize,
}) => {
  return (
    <AvatarWrapper
      variant={variant}
      size={size}
      bgColor={bgColor}
      textColor={textColor}
      fontSize={fontSize}
    >
      {initials}
    </AvatarWrapper>
  );
};

TextAvatar.propTypes = {
  initials: PropTypes.string.isRequired,
  size: PropTypes.string,
  variant: PropTypes.oneOf(['circle', 'square', 'rounded-square']),
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  fontSize: PropTypes.string,
};

TextAvatar.defaultProps = {
  variant: 'circle',
  size: '40px',
  bgColor: '#cccccc',
  textColor: '#ffffff',
  fontSize: '1.2em',
};

export default TextAvatar;
