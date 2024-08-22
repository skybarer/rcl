import React, { useState } from 'react';
import { RangeInput } from './RangeInput';

export default {
  title: 'Form/RangeInput',
  component: RangeInput,
};

const Template = (args) => {
  const [value, setValue] = useState(args.value || 50);
  return <RangeInput {...args} value={value} onChange={setValue} />;
};

export const Default = Template.bind({});
Default.args = {
  min: 0,
  max: 100,
  step: 1,
  trackColor: '#ddd',
  thumbColor: '#4CAF50',
  showValue: true,
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  min: 0,
  max: 200,
  step: 5,
  trackColor: '#ccc',
  thumbColor: '#FF5722',
  showValue: true,
};

export const NoValueLabel = Template.bind({});
NoValueLabel.args = {
  min: 0,
  max: 100,
  step: 1,
  trackColor: '#ddd',
  thumbColor: '#4CAF50',
  showValue: false,
};
