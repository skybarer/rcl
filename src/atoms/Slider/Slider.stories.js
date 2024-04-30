import React, { useState } from 'react';
import Slider from './Slider'; // Adjust the import path according to your project structure

export default {
  title: 'Slider',
  component: Slider,
};

const Template = (args) => {
  const [sliderValue, setSliderValue] = useState(args.value);

  const handleChange = (e) => {
    setSliderValue(parseInt(e.target.value, 10));
  };

  return (
    <>
      {args.min}{' '}
      <Slider {...args} value={sliderValue} onChange={handleChange} />{' '}
      {args.max}
      <p>{sliderValue}</p>
    </>
  );
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
