import React, { useState } from 'react';
import { QuantitySelector } from './QuantitySelector';

export default {
  title: 'QuantitySelector',
  component: QuantitySelector,
};

const Template = (args) => {
  const [value, setValue] = useState(args.value || 1);

  const handleIncrease = () => {
    setValue((prev) => Math.min(prev + args.step, args.max));
  };

  const handleDecrease = () => {
    setValue((prev) => Math.max(prev - args.step, args.min));
  };

  return (
    <QuantitySelector
      {...args}
      value={value}
      onIncrease={handleIncrease}
      onDecrease={handleDecrease}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  value: 1,
  min: 1,
  max: 10,
  step: 1,
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  value: 2,
  min: 1,
  max: 10,
  step: 1,
  bgColor: '#FF5722',
  hoverColor: '#E64A19',
};

export const NoDecreaseButton = Template.bind({});
NoDecreaseButton.args = {
  value: 1,
  min: 1,
  max: 10,
  step: 1,
  disableDecrease: true,
};

export const NoIncreaseButton = Template.bind({});
NoIncreaseButton.args = {
  value: 10,
  min: 1,
  max: 10,
  step: 1,
  disableIncrease: true,
};
