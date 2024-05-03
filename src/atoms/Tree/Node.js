import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TreeNode = styled.div`
  margin: 0.5rem 0;
`;

const NodeLabel = styled.div`
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #007bff;
  }
`;

const ChildrenContainer = styled.div`
  padding-left: 1.5rem;
  display: ${(props) =>
    props.isOpen ? 'block' : 'none'}; // Only display if isOpen is true
`;

const Node = ({ label, children }) => {
  // Initialize with false to start in collapsed state
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <TreeNode>
      <NodeLabel onClick={toggleOpen}>
        {isOpen ? '▾' : '▸'} {label}
      </NodeLabel>
      <ChildrenContainer isOpen={isOpen}>{children}</ChildrenContainer>
    </TreeNode>
  );
};

Node.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Node;
