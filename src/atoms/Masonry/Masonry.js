// src/components/Masonry.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MasonryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;
`;

const MasonryItem = styled.div`
  background-color: #f5f5f5;
  padding: 10px;
`;

const Masonry = ({ items }) => (
  <MasonryWrapper>
    {items.map((item, index) => (
      <MasonryItem key={index}>{item}</MasonryItem>
    ))}
  </MasonryWrapper>
);

Masonry.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Masonry;
