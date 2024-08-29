// SVGViewer.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';
import SVGViewer from './SVGViewer';

// Import all SVG files from a folder
const reqSvgs = require.context('../../assets/icons/', true, /\.svg$/);
const svgFiles = reqSvgs.keys().map((path) => ({
  path: reqSvgs(path),
  name: path.split('/').pop(),
}));

storiesOf('SVGViewer', module).add('SvgList', () => (
  <>
    <div>{reqSvgs}</div>
    <div>svg files: {svgFiles.length}</div>
    <SVGViewer srcs={svgFiles} />
  </>
));
