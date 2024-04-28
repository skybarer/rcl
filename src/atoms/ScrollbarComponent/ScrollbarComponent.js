// ScrollbarComponent.js
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ScrollbarContainer = styled.div`
  height: 300px;
  overflow-y: scroll;
`;

const Content = styled.div`
  height: auto;
`;

const ScrollbarComponent = ({ content }) => (
  <ScrollbarContainer>
    <Content>{content}</Content>
  </ScrollbarContainer>
);

ScrollbarComponent.propTypes = {
  content: PropTypes.node.isRequired,
};

export default ScrollbarComponent;
