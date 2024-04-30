import React, { useState } from 'react';
import PriceSlider from './PriceSlider'; // Adjust path to where your component is located

export default {
  title: 'PriceSlider', // Title determines where the story appears in Storybook's sidebar
  component: PriceSlider,
};

const Template = (args) => {
  // Use a state to manage the values for min and max
  const [minValue, setMinValue] = useState(args.minValue);
  const [maxValue, setMaxValue] = useState(args.maxValue);

  const handleChange = (newMin, newMax) => {
    setMinValue(newMin);
    setMaxValue(newMax);
  };

  return (
    <div>
      <PriceSlider
        {...args} // Pass props defined by the story args
        minValue={minValue}
        maxValue={maxValue}
        onChange={handleChange} // Pass the onChange handler
      />
      {/* Display the current values of the slider */}
      <div>
        Min Value: {minValue}, Max Value: {maxValue}
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  min: 0, // Set initial props for your story
  max: 100,
  minValue: 20,
  maxValue: 80,
};

export const CustomRange = Template.bind({});
CustomRange.args = {
  min: 10,
  max: 200,
  minValue: 30,
  maxValue: 150,
};
