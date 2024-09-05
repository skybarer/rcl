// src/components/TimePicker.stories.js
import React from 'react';
import TimePicker from './TimePicker';

export default {
  title: 'TimePicker',
  component: TimePicker,
};

const Template = (args) => <TimePicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  onChange: (time) => console.log('Selected time:', time),
};
