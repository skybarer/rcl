import { useState, useEffect } from 'react';

// Define breakpoints
const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

// Function to determine the current breakpoint
const getBreakpoint = (width) => {
  if (width >= breakpoints.xxl) return 'xxl';
  if (width >= breakpoints.xl) return 'xl';
  if (width >= breakpoints.lg) return 'lg';
  if (width >= breakpoints.md) return 'md';
  if (width >= breakpoints.sm) return 'sm';
  return 'xs';
};

// Custom hook to detect breakpoint
const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(() =>
    getBreakpoint(window.innerWidth),
  );

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(getBreakpoint(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoint;
};

export default useBreakpoint;
