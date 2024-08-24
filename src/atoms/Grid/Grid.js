import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const breakpoints = {
  lg: 1200,
  md: 992,
  sm: 768,
  xs: 576,
};

const StyledGrid = styled.div`
  display: grid;
  gap: ${(props) => props.gap}px;
  grid-template-columns: ${(props) => props.templateColumns};
`;

const Grid = ({ columns, gap, children, style }) => {
  const [templateColumns, setTemplateColumns] = useState(
    `repeat(${columns}, 1fr)`,
  );

  const containerRef = useRef(null);

  useEffect(() => {
    const updateTemplateColumns = (width) => {
      if (width < breakpoints.xs) {
        setTemplateColumns('1fr'); // Single-column layout for very small screens
      } else if (width < breakpoints.sm) {
        setTemplateColumns('repeat(2, 1fr)'); // Two-column layout for small screens
      } else if (width < breakpoints.md) {
        setTemplateColumns('repeat(3, 1fr)'); // Three-column layout for tablets
      } else if (width < breakpoints.lg) {
        setTemplateColumns(`repeat(${Math.min(columns, 6)}, 1fr)`); // Up to 6 columns for medium screens
      } else {
        setTemplateColumns(`repeat(${columns}, 1fr)`); // Default to full 20 columns for large screens
      }
    };

    const resizeObserver = new ResizeObserver((entries) => {
      if (entries.length > 0) {
        const { contentRect } = entries[0];
        updateTemplateColumns(contentRect.width); // Adjust layout based on observed width
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current); // Start observing size changes
    }

    // Cleanup the observer when unmounting
    return () => {
      resizeObserver.disconnect();
    };
  }, [columns]);

  return (
    <StyledGrid
      gap={gap}
      templateColumns={templateColumns}
      ref={containerRef}
      style={{ ...style }}
    >
      {children}
    </StyledGrid>
  );
};

Grid.propTypes = {
  columns: PropTypes.number,
  gap: PropTypes.number,
  templateColumns: PropTypes.number,
  children: PropTypes.node,
};

Grid.defaultProps = {
  columns: 3,
  gap: 10,
};

export default Grid;
