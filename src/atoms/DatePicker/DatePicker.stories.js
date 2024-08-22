import React from 'react';
import { action } from '@storybook/addon-actions';
import DatePicker from './DatePicker';

export default {
  title: 'Form/DatePicker',
  component: DatePicker,
};

export const Default = () => (
  <DatePicker
    selectedDate="2024-04-19"
    handleDateChange={action('date-changed')}
  />
);
