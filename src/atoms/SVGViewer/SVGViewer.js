// SVGViewer.js
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SVGWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const SVGItem = styled.div`
  margin: 10px;
`;

const SVGViewer = ({ srcs }) => (
  <SVGWrapper>
    {srcs.map((src, index) => (
      <SVGItem key={index}>
        <img src={src.path} alt={`SVG File ${index}`} />
        <div>{src.name}</div>
      </SVGItem>
    ))}
  </SVGWrapper>
);

SVGViewer.propTypes = {
  srcs: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default SVGViewer;
