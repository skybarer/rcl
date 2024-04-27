// SVGViewer.js
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Grid from './../Grid/Grid';
import Box from './../Grid/Box';
import Card from './../Card/Card';
import { Tooltip } from '../Tooltip';

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
  <Grid columns={12} gap={0}>
    {srcs.map((src, index) => (
      <Card key={index} style={{ 'text-align': 'center' }}>
        <Tooltip key={index} content={src.name}>
          <img
            width={'100px'}
            src={src.path}
            alt={`SVG File ${index}`}
            style={{
              alignContent: 'center',
            }}
          />
        </Tooltip>

        <div>{src.name}</div>
      </Card>
    ))}
  </Grid>
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
