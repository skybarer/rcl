// src/components/ProgressIndicator.js
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

// Keyframes for the loading animation
const loading = keyframes`
  0% { width: 0; }
  50% { width: 50%; }
  100% { width: 100%; }
`;

// Styled component for the progress indicator
const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  background-color: ${({ color }) => color || '#ff0000'};
  width: ${({ isLoading }) => (isLoading ? '100%' : '0')};
  animation: ${({ isLoading }) => (isLoading ? loading : 'none')} 
    ${({ duration }) => duration || 2}s ease-in-out forwards;
  transition: opacity 0.3s ease;
  opacity: ${({ isLoading }) => (isLoading ? 1 : 0)};
`;

const ProgressIndicator = ({ isLoading, color, duration }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (isLoading) {
            setVisible(true);
        } else {
            // Hide the bar after the animation ends
            const timer = setTimeout(() => setVisible(false), duration * 1000);
            return () => clearTimeout(timer);
        }
    }, [isLoading, duration]);

    return <>{visible && <ProgressBar isLoading={isLoading} color={color} duration={duration} />}</>;
};

ProgressIndicator.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    color: PropTypes.string,
    duration: PropTypes.number,
};

ProgressIndicator.defaultProps = {
    color: '#ff0000', // Default color red like YouTube
    duration: 2, // Default duration of 2 seconds
};

export default ProgressIndicator;
