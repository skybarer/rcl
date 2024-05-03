import React, { useState } from 'react';
import styled from 'styled-components';
import Node from './../Node/Node';
import { ContextMenu } from '../ContextMenu';

// Styled-component for the canvas
const CanvasWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  background-color: #fafafa;
`;

const Graph = () => {
  const [nodes, setNodes] = useState([]);
  const [contextMenu, setContextMenu] = useState(null);

  const handleCanvasRightClick = (e) => {
    e.preventDefault();

    setContextMenu({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleOptionClick = (option) => {
    if (option === 'Add Node') {
      const newNode = {
        id: `node-${nodes.length + 1}`,
        x: contextMenu.x,
        y: contextMenu.y,
        label: `Node ${nodes.length + 1}`,
        initialWidth: 100,
        initialHeight: 100,
      };

      setNodes([...nodes, newNode]);
      setContextMenu(null);
    }
  };

  const handleDeleteNode = (nodeId) => {
    setNodes(nodes.filter((node) => node.id !== nodeId));
  };

  return (
    <CanvasWrapper onContextMenu={handleCanvasRightClick}>
      {nodes.map((node) => (
        <Node
          key={node.id}
          x={node.x}
          y={node.y}
          id={node.id}
          initialWidth={node.initialWidth}
          initialHeight={node.initialHeight}
          label={node.label}
          onDelete={handleDeleteNode}
        />
      ))}
      {contextMenu && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onOptionClick={handleOptionClick}
        />
      )}
    </CanvasWrapper>
  );
};

export default Graph;
