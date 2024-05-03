import React from 'react';
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

const Node = ({ label, children }) => (
  <TreeNode>
    <NodeLabel>{label}</NodeLabel>
    {children && children.length > 0 && <div>{children}</div>}
  </TreeNode>
);

Node.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Node;
