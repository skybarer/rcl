import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sizes from '../../json/sizes.json';

// Define your default spacing scale
const defaultSpacingScale = sizes;

// Create a styled component that uses the spacing scale
const SpaceContainer = styled.div`
  margin: ${({ scale, size }) => scale[size]};
`;

// Create your Space component
const Space = ({ size, children, customScale }) => {
  const scale = customScale || defaultSpacingScale;

  return (
    <SpaceContainer scale={scale} size={size}>
      {children}
    </SpaceContainer>
  );
};

Space.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  children: PropTypes.node.isRequired,
  customScale: PropTypes.object,
};

export default Space;
