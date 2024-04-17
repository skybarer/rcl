// ColorPicker.stories.js
import React from 'react';
import { action } from '@storybook/addon-actions';
import ColorPicker from './ColorPicker';

export default {
  title: 'ColorPicker',
  component: ColorPicker,
};

export const Default = () => (
  <ColorPicker
    colors={[
      '#eff6ff',
      '#dbeafe',
      '#bfdbfe',
      '#93c5fd',
      '#60a5fa',
      '#3b82f6',
      '#2563eb',
      '#1d4ed8',
      '#1e40af',
      '#1e3a8a',
    ]}
    onColorSelect={action('color selected')}
  />
);
