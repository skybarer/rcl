// ColorPicker.stories.js
import React from 'react';
import { action } from '@storybook/addon-actions';
import ColorPicker from './ColorPicker';
import Card from '../Card/Card';
import Grid from '../Grid/Grid';

export default {
  title: 'ColorPicker',
  component: ColorPicker,
};

export const Default = () => (
  <Card variant="outlined">
    <Grid>
      <ColorPicker
        colors={['#eff6ff', '#dbeafe', '#bfdbfe', '#93c5fd', '#60a5fa']}
        onColorSelect={action('color selected')}
      />
    </Grid>
    <Grid variant="outlined">
      <ColorPicker
        colors={['#60a5fa', '#3b82f6', '#2563eb', '#1d4ed8', '#1e40af']}
        onColorSelect={action('color selected')}
      />
    </Grid>
  </Card>
);
