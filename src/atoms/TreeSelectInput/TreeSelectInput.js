import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled Components
const DropdownContainer = styled.div`
  position: relative;
  width: 300px;
`;

const InputContainer = styled.div`
  border: 1px solid #ccc;
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

const InputLabel = styled.span`
  flex-grow: 1;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  border: 1px solid #ccc;
  background-color: white;
  max-height: 300px;
  overflow-y: auto;
  border-radius: 5px;
  z-index: 1000;
`;

const TreeNode = styled.div`
  padding-left: ${(props) => props.level * 20}px;
  cursor: pointer;
  user-select: none;
  padding: 5px;
  &:hover {
    background-color: #f0f0f0;
  }
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

const ClearButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #007bff;
  &:hover {
    text-decoration: underline;
  }
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

  const handleToggle = (e) => {
    e.stopPropagation();
    setExpanded(!expanded);
    onToggle(node.id, !expanded);
  };

  const handleSelect = (e) => {
    e.stopPropagation();
    onSelect(node.id, node.label);
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

// TreeSelectInput Component
export const TreeSelectInput = ({ treeData, onNodeSelect }) => {
  const [selectedNodes, setSelectedNodes] = useState([]);
  const [selectedLabel, setSelectedLabel] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (nodeId, label) => {
    setSelectedNodes([nodeId]);
    setSelectedLabel(label);
    setIsOpen(false);
    onNodeSelect(nodeId);
  };

  const handleToggle = (nodeId, isExpanded) => {
    console.log(`${nodeId} is now ${isExpanded ? 'expanded' : 'collapsed'}`);
  };

  const clearSelection = () => {
    setSelectedNodes([]);
    setSelectedLabel('');
    onNodeSelect(null);
  };

  return (
    <DropdownContainer>
      <InputContainer onClick={() => setIsOpen(!isOpen)}>
        <InputLabel>{selectedLabel || 'Select an option'}</InputLabel>
        {selectedLabel && (
          <ClearButton
            onClick={(e) => {
              e.stopPropagation();
              clearSelection();
            }}
          >
            Clear
          </ClearButton>
        )}
      </InputContainer>
      {isOpen && (
        <Dropdown>
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
        </Dropdown>
      )}
    </DropdownContainer>
  );
};

// Prop Types
TreeSelectInput.propTypes = {
  treeData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      children: PropTypes.array,
    }),
  ).isRequired,
  onNodeSelect: PropTypes.func,
};

TreeSelectInput.defaultProps = {
  onNodeSelect: () => {},
};
