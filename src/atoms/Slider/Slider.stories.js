import React, { useState } from 'react';
import Slider from './Slider'; // Adjust the import path according to your project structure

export default {
  title: 'Slider',
  component: Slider,
  argTypes: {
    min: { control: 'number', defaultValue: 0 },
    max: { control: 'number', defaultValue: 100 },
    value: { control: 'number', defaultValue: 50 },
  },
};

const Template = (args) => {
  const [sliderValue, setSliderValue] = useState(args.value);

  const handleChange = (e) => {
    setSliderValue(parseInt(e.target.value, 10));
  };

  return <Slider {...args} value={sliderValue} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  min: 0,
  max: 100,
  value: 50,
};

export const MinValue = Template.bind({});
MinValue.args = {
  min: 0,
  max: 100,
  value: 0,
};

export const MaxValue = Template.bind({});
MaxValue.args = {
  min: 0,
  max: 100,
  value: 100,
};

export const CustomRange = Template.bind({});
CustomRange.args = {
  min: 0,
  max: 200,
  value: 150,
};
