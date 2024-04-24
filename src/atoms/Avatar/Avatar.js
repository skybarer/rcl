import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Get appropriate border-radius for different avatar variants
const getBorderRadius = (variant) => {
  switch (variant) {
    case 'circle':
      return '50%';
    case 'square':
      return '0';
    case 'rounded-square':
      return '10%';
    default:
      return '50%'; // Default is circle
  }
};

// Define the wrapper with relative positioning
const AvatarWrapper = styled.div`
  display: inline-block;
  overflow: hidden;
  position: relative; // For correct position of the status indicator
  border-radius: ${({ variant }) => getBorderRadius(variant)};
`;

// Define the avatar image with flexible size
const AvatarImage = styled.img`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  object-fit: cover;
`;

// Define the status indicator with proper size and color
const StatusIndicator = styled.span`
  position: absolute;
  display: ${({ show }) => (show ? 'block' : 'none')}; // Control visibility
  bottom: 3px; // Slightly adjusted for better visibility
  right: 3px; // Positioned to avoid clipping
  height: ${({ size }) =>
    parseFloat(size) * 0.2 + 'px'}; // Proportional size based on avatar
  width: ${({ size }) =>
    parseFloat(size) * 0.2 + 'px'}; // Same proportional width
  border-radius: 50%; // Ensure it's a circle
  background-color: ${({ status }) =>
    status === 'online'
      ? 'rgb(27, 158, 62)'
      : 'rgb(229, 83, 83)'}; // Green for online, red for offline
  border: 2px solid white; // White border for visibility against any background
`;

const Avatar = ({
  src,
  alt,
  size,
  variant,
  defaultImage,
  status,
  showStatus,
}) => {
  return (
    <AvatarWrapper variant={variant}>
      <AvatarImage src={src || defaultImage} alt={alt} size={size} />
      <StatusIndicator show={showStatus} status={status} size={size} />
    </AvatarWrapper>
  );
};

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
  size: PropTypes.string,
  variant: PropTypes.oneOf(['circle', 'square', 'rounded-square']),
  defaultImage: PropTypes.string,
  status: PropTypes.oneOf(['online', 'offline']),
  showStatus: PropTypes.bool,
};

Avatar.defaultProps = {
  size: '50px',
  variant: 'circle',
  defaultImage: 'https://via.placeholder.com/50',
  status: 'offline',
  showStatus: true,
};

export default Avatar;
