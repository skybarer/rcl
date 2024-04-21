// Alert.stories.js
import React from 'react';
import Alert from './Alert';

export default {
  title: 'Alert',
  component: Alert,
};

const Template = (args) => <Alert {...args} />;

export const Error = Template.bind({});
Error.args = {
  children: 'Error: Something went wrong!',
  backgroundColor: '#f44336',
  color: '#fff',
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'Warning: This is a warning!',
  backgroundColor: '#ff9800',
  color: '#000',
};

export const Info = Template.bind({});
Info.args = {
  children: 'Info: This is some information.',
  backgroundColor: '#2196f3',
  color: '#fff',
};

export const Success = Template.bind({});
Success.args = {
  children: 'Success: Operation completed successfully!',
  backgroundColor: '#4caf50',
  color: '#fff',
};
