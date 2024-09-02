import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.6;
  }
`;

const SkeletonContainer = styled.div`
  display: inline-block;
  background-color: #ccc;
  width: ${(props) => props.width || '100px'};
  height: ${(props) => props.height || '16px'};
  border-radius: 4px;
  animation: ${loadingAnimation} 1.5s infinite;
`;

const Skeleton = ({ width, height }) => {
  return <SkeletonContainer width={width} height={height} />;
};

Skeleton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Skeleton;
