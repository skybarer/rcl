// src/ImageHoverEnlarge.js

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ImageContainer = styled.div`
  overflow: hidden;
  width: ${({ width }) => width || '200px'};
  height: ${({ height }) => height || '200px'};
  border-radius: ${({ borderRadius }) => borderRadius || '8px'};
  box-shadow: ${({ shadow }) => shadow || '0 4px 6px rgba(0, 0, 0, 0.1)'};
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover img {
    transform: scale(1.2);
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const ImageHoverEnlarge = ({
  src,
  alt,
  width,
  height,
  borderRadius,
  shadow,
}) => {
  return (
    <ImageContainer
      width={width}
      height={height}
      borderRadius={borderRadius}
      shadow={shadow}
    >
      <StyledImage src={src} alt={alt} />
    </ImageContainer>
  );
};

ImageHoverEnlarge.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  borderRadius: PropTypes.string,
  shadow: PropTypes.string,
};

export default ImageHoverEnlarge;
