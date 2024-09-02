// CountdownTimer.stories.js
import React from 'react';
import CountdownTimer from './CountdownTimer'; // Adjust the path according to your project structure

export default {
  title: 'CountdownTimer',
  component: CountdownTimer,
  argTypes: {
    initialTime: { control: { type: 'number', min: 0 } },
    onComplete: { action: 'completed' },
  },
};

const Template = (args) => <CountdownTimer {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialTime: 390000000, // 1 hour in milliseconds
};

export const CustomCompletion = Template.bind({});
CustomCompletion.args = {
  initialTime: 90000, // 1 minute and 30 seconds in milliseconds
  onComplete: () => alert('Custom Completion Action!'),
};
