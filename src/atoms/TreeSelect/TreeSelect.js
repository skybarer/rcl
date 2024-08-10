import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled Components
const TreeSelectContainer = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
`;

const TreeNode = styled.div`
  padding-left: ${(props) => props.level * 20}px;
  cursor: pointer;
  user-select: none;
`;

const TreeNodeLabel = styled.span`
  font-weight: ${(props) => (props.selected ? 'bold' : 'normal')};
`;

const TreeNodeToggle = styled.span`
  margin-right: 5px;
  cursor: pointer;
`;

const ChildrenContainer = styled.div`
  margin-left: 20px;
`;

// TreeNode Component
const TreeNodeComponent = ({
  node,
  level,
  onToggle,
  onSelect,
  selectedNodes,
}) => {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = node.children && node.children.length > 0;
  const isSelected = selectedNodes.includes(node.id);

  const handleToggle = () => {
    setExpanded(!expanded);
    onToggle(node.id, !expanded);
  };

  const handleSelect = () => {
    onSelect(node.id);
  };

  return (
    <div>
      <TreeNode level={level} onClick={handleSelect}>
        {hasChildren && (
          <TreeNodeToggle onClick={handleToggle}>
            {expanded ? '-' : '+'}
          </TreeNodeToggle>
        )}
        <TreeNodeLabel selected={isSelected}>{node.label}</TreeNodeLabel>
      </TreeNode>
      {expanded && hasChildren && (
        <ChildrenContainer>
          {node.children.map((childNode) => (
            <TreeNodeComponent
              key={childNode.id}
              node={childNode}
              level={level + 1}
              onToggle={onToggle}
              onSelect={onSelect}
              selectedNodes={selectedNodes}
            />
          ))}
        </ChildrenContainer>
      )}
    </div>
  );
};

TreeNodeComponent.propTypes = {
  node: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    children: PropTypes.array,
  }).isRequired,
  level: PropTypes.number,
  onToggle: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  selectedNodes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// TreeSelect Component
export const TreeSelect = ({ treeData, onNodeSelect }) => {
  const [selectedNodes, setSelectedNodes] = useState([]);

  const handleSelect = (nodeId) => {
    setSelectedNodes((prevSelected) =>
      prevSelected.includes(nodeId)
        ? prevSelected.filter((id) => id !== nodeId)
        : [...prevSelected, nodeId],
    );
    onNodeSelect(nodeId);
  };

  const handleToggle = (nodeId, isExpanded) => {
    console.log(`${nodeId} is now ${isExpanded ? 'expanded' : 'collapsed'}`);
  };

  return (
    <TreeSelectContainer>
      {treeData.map((node) => (
        <TreeNodeComponent
          key={node.id}
          node={node}
          level={0}
          onToggle={handleToggle}
          onSelect={handleSelect}
          selectedNodes={selectedNodes}
        />
      ))}
    </TreeSelectContainer>
  );
};

// Prop Types
TreeSelect.propTypes = {
  treeData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      children: PropTypes.array,
    }),
  ).isRequired,
  onNodeSelect: PropTypes.func,
};

TreeSelect.defaultProps = {
  onNodeSelect: () => {},
};
