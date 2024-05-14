// ColorPicker.stories.js
import React from 'react';
import { action } from '@storybook/addon-actions';
import ColorPicker from './ColorPicker';
import Card from '../Card/Card';
import Grid from '../Grid/Grid';
import Space from './../Space/Space';

export default {
  title: 'ColorPicker',
  component: ColorPicker,
};

export const Default = () => (
  <>
    <Card variant="filled" width="min-content">
      <Grid columns={1}>
        <ColorPicker
          colors={['#eff6ff', '#dbeafe', '#bfdbfe', '#93c5fd', '#60a5fa']}
          onColorSelect={action('color selected')}
        />
      </Grid>
      <Grid columns={1} variant="filled">
        <ColorPicker
          colors={['#60a5fa', '#3b82f6', '#2563eb', '#1d4ed8', '#1e40af']}
          onColorSelect={action('color selected')}
        />
      </Grid>
    </Card>
    <Space marginSize={5}></Space>
    <Card variant="filled" width="min-content">
      <Grid columns={1}>
        <ColorPicker
          colors={['#f8fafc', '#f1f5f9', '#e2e8f0', '#cbd5e1', '#94a3b8']}
          onColorSelect={action('color selected')}
        />
      </Grid>
      <Grid columns={1} variant="filled">
        <ColorPicker
          colors={['#64748b', '#475569', '#334155', '#1e293b', '#0f172a']}
          onColorSelect={action('color selected')}
        />
      </Grid>
    </Card>
  </>
);
