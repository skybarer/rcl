// BreakpointDisplay.stories.js
import React from 'react';
import BreakpointDisplay from './BreakpointDisplay'; // Make sure the path is correct

export default {
  title: 'Hooks/BreakpointDisplay',
  component: BreakpointDisplay,
};

const Template = (args) => <BreakpointDisplay {...args} />;

export const Default = Template.bind({});
Default.args = {};
