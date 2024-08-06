import React, { useState } from 'react';
import ColorSelector from './ColorSelector';

export default {
  title: 'ColorSelector',
  component: ColorSelector,
};

const Template = (args) => {
  const [selectedColor, setSelectedColor] = useState(args.selectedColor);

  return (
    <ColorSelector
      {...args}
      selectedColor={selectedColor}
      onColorChange={(color) => setSelectedColor(color)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  colors: ['#FF5733', '#33FF57', '#3357FF', '#F833FF', '#33FFF8', '#FFD700'],
  selectedColor: '#FF5733',
};
