import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CarouselItemWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: auto;
  color: black;
  border: 0.1px dashed black;
  width: 100%;
  object-fit: contain;
`;

export const CarouselItem = ({ children }) => {
  return <CarouselItemWrapper>{children}</CarouselItemWrapper>;
};

CarouselItem.propTypes = {
  width: PropTypes.string,
};
CarouselItem.defaultProps = {};
