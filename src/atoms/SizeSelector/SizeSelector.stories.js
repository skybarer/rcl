import React, { useState } from 'react';
import SizeSelector from './SizeSelector';

export default {
  title: 'Form/SizeSelector',
  component: SizeSelector,
};

const Template = (args) => {
  const [selectedSize, setSelectedSize] = useState(args.selectedSize);

  return (
    <SizeSelector
      {...args}
      selectedSize={selectedSize}
      onSizeChange={(size) => setSelectedSize(size)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
  selectedSize: 'M',
};
