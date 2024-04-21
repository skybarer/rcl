// src/stories/RadioGroup.stories.js
import React, { useState } from 'react';
import RadioGroup from './RadioGroup';

export default {
  title: 'RadioGroup',
  component: RadioGroup,
};

const Template = (args) => {
  const [value, setValue] = useState(args.value);
  return (
    <RadioGroup
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  name: 'radioGroup',
  value: 'option1',
};
