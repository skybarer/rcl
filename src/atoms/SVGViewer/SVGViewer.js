// SVGViewer.js
import React from 'react';
import PropTypes from 'prop-types';
import Grid from './../Grid/Grid';
import Card from './../Card/Card';
import { Tooltip } from '../Tooltip';

const SVGViewer = ({ srcs }) => (
  <Grid columns={6} gap={0}>
    {srcs.map((src, index) => (
      <Card
        width={'max-width'}
        height={'max-width'}
        variant="beige"
        key={index}
        style={{
          'text-align': 'center',
        }}
      >
        <Tooltip key={index} content={src.name}>
          <img
            src={src.path}
            alt={`SVG File ${index}`}
            style={{
              alignContent: 'center',
              width: '100px',
              height: '100px',
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
