import React from 'react';
import ComboButton from './ComboButton';

export default {
  title: 'ComboButton',
  component: ComboButton,
};

const Template = (args) => <ComboButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
  primary: false,
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  primary: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: true,
  label: 'Button with Icon',
  primary: true,
};
