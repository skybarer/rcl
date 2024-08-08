// src/components/ScrollableHeadline.js

import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

// Keyframes for scrolling animation
const scroll = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

// Styled Components
const HeadlineContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  background-color: #f0f0f0;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

const HeadlineText = styled.div`
  display: inline-block;
  padding: 0 100%; /* Create space for looping */
  font-size: 1.5rem;
  color: #333;
  animation: ${scroll} ${({ duration }) => duration}s linear infinite;
`;

const ScrollableHeadline = ({ text, duration }) => {
  return (
    <HeadlineContainer>
      <HeadlineText duration={duration}>{text}</HeadlineText>
    </HeadlineContainer>
  );
};

ScrollableHeadline.propTypes = {
  text: PropTypes.string.isRequired,
  duration: PropTypes.number, // Duration in seconds
};

ScrollableHeadline.defaultProps = {
  duration: 30, // Default duration of 10 seconds
};

export default ScrollableHeadline;
