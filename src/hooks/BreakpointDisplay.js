// BreakpointDisplay.js
import React from 'react';
import styled from 'styled-components';
import useBreakpoint from './useBreakpoint'; // Make sure the path is correct

// Define a styled div that adjusts based on props
const StyledBox = styled.div`
  padding: 20px;
  color: white;
  background-color: ${({ breakpoint }) => {
    switch (breakpoint) {
      case 'xxl':
        return 'darkblue';
      case 'xl':
        return 'navy';
      case 'lg':
        return 'green';
      case 'md':
        return 'orange';
      case 'sm':
        return 'red';
      default:
        return 'purple'; // xs
    }
  }};
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
  opacity: 0.5;
  font-size: 1.5rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  padding: ${({ breakpoint }) => {
    switch (breakpoint) {
      case 'xxl':
        return '40px';
      case 'xl':
        return '35px';
      case 'lg':
        return '30px';
      case 'md':
        return '25px';
      case 'sm':
        return '20px';
      default:
        return '15px'; // xs
    }
  }};
  font-size: ${({ breakpoint }) => {
    switch (breakpoint) {
      case 'xxl':
        return '24px';
      case 'xl':
        return '22px';
      case 'lg':
        return '20px';
      case 'md':
        return '18px';
      case 'sm':
        return '16px';
      default:
        return '14px'; // xs
    }
  }};
  margin: ${({ breakpoint }) => {
    switch (breakpoint) {
      case 'xxl':
        return '20px';
      case 'xl':
        return '18px';
      case 'lg':
        return '16px';
      case 'md':
        return '14px';
      case 'sm':
        return '12px';
      default:
        return '10px'; // xs
    }
  }};
  border-radius: ${({ breakpoint }) => {
    switch (breakpoint) {
      case 'xxl':
        return '12px';
      case 'xl':
        return '10px';
      case 'lg':
        return '8px';
      case 'md':
        return '6px';
      case 'sm':
        return '4px';
      default:
        return '2px'; // xs
    }
  }};
`;

const BreakpointDisplay = () => {
  const breakpoint = useBreakpoint();

  return (
    <StyledBox breakpoint={breakpoint}>
      <h2>Current Breakpoint: {breakpoint}</h2>
      <p>
        Resize the window to see the background color change based on the
        current breakpoint.
      </p>
    </StyledBox>
  );
};

export default BreakpointDisplay;
