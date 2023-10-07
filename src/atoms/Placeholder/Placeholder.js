// Placeholder.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

const PlaceholderWrapper = styled.div`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '20px'};
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  animation: ${shimmer} 1.2s infinite;
  margin-bottom: ${(props) => props.marginBottom || '10px'};
`;

const Placeholder = ({ width, height, marginBottom }) => {
  return <PlaceholderWrapper width={width} height={height} marginBottom={marginBottom} />;
};

export default Placeholder;
