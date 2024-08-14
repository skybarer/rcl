import React from 'react';
import Copy from './Copy';

export default {
  title: 'Copy',
  component: Copy,
};

const Template = (args) => <Copy {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Copy this text',
  onCopy: () => alert('Text copied!'),
};
