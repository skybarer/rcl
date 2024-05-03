import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Styled-component for the node
const NodeWrapper = styled.div`
  position: absolute;
  background-color: #f0f0f0;
  border: 2px solid #333;
  padding: 10px;
  border-radius: 5px;
  cursor: grab;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  &:hover {
    border-color: blue; // Change color on hover to indicate interactive
  }
`;

// Styled-component for the resize handle
const ResizeHandle = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: blue;
  cursor: se-resize;
  bottom: 0;
  right: 0;
`;

const Node = ({ x, y, initialWidth, initialHeight, label, onResize }) => {
  const [position, setPosition] = useState({ x, y });
  const [size, setSize] = useState({
    width: initialWidth,
    height: initialHeight,
  });

  const handleDragEnd = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleResizeStart = (e) => {
    e.stopPropagation(); // Prevent event propagation to avoid conflicts
    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = size.width;
    const startHeight = size.height;

    const handleResize = (e) => {
      const newWidth = startWidth + (e.clientX - startX);
      const newHeight = startHeight + (e.clientY - startY);
      setSize({ width: newWidth, height: newHeight });
    };

    const handleResizeEnd = () => {
      document.removeEventListener('mousemove', handleResize);
      document.removeEventListener('mouseup', handleResizeEnd);
    };

    document.addEventListener('mousemove', handleResize);
    document.addEventListener('mouseup', handleResizeEnd);
  };

  return (
    <NodeWrapper
      style={{ left: position.x, top: position.y }}
      width={size.width}
      height={size.height}
      draggable
      onDragEnd={handleDragEnd}
    >
      <strong>{label}</strong>
      <ResizeHandle onMouseDown={handleResizeStart} />
    </NodeWrapper>
  );
};

Node.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  initialWidth: PropTypes.number.isRequired,
  initialHeight: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

export default Node;
