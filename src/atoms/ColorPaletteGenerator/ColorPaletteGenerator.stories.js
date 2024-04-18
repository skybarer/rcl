import React from 'react';
import { storiesOf } from '@storybook/react';
import ColorPaletteGenerator from './ColorPaletteGenerator';

storiesOf('ColorPaletteGenerator', module).add('default', () => (
  <ColorPaletteGenerator initialColor="#000000" />
));
