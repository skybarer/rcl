// SVGViewer.js
import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import Grid from './../Grid/Grid';
import Card from './../Card/Card';
import { Tooltip } from '../Tooltip';
import Spinners from './../Spinners/Spinners';

// Lazy load the SVG component
const LazySVG = React.lazy(() => import('./LazyImage'));

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
          cursor: 'pointer',
        }}
      >
        <Tooltip key={index} content={src.name}>
          <Suspense fallback={<Spinners />}>
            <LazySVG
              src={src.path}
              alt={`SVG File ${index}`}
              style={{
                alignContent: 'center',
                width: '100px',
                height: 'auto',
              }}
            />
          </Suspense>
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
