// src/components/Avatar.js
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
  display: inline-block;
  overflow: hidden;
  border-radius: ${({ variant }) => getBorderRadius(variant)};
`;

const AvatarImage = styled.img`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  object-fit: cover;
`;

const Avatar = ({ src, alt, size, variant, defaultImage }) => {
  return (
    <AvatarWrapper variant={variant}>
      <AvatarImage src={src || defaultImage} alt={alt} size={size} />
    </AvatarWrapper>
  );
};

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
  size: PropTypes.string,
  variant: PropTypes.oneOf(['circle', 'square', 'rounded-square']),
  defaultImage: PropTypes.string,
};

Avatar.defaultProps = {
  size: '50px',
  variant: 'circle',
  defaultImage: 'https://via.placeholder.com/50',
};

export default Avatar;
