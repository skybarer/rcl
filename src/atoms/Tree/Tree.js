import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TreeContainer = styled.div`
  padding-left: 1.5rem;
`;

const Tree = ({ children }) => {
  return <TreeContainer>{children}</TreeContainer>;
};

Tree.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Tree;
