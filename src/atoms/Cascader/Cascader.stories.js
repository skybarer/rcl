import React from 'react';
import { Cascader } from './Cascader';

export default {
  title: 'Form/Cascader',
  component: Cascader,
};

const options = [
  {
    value: 'option1',
    label: 'Option 1',
    children: [
      {
        value: 'suboption1-1',
        label: 'Sub Option 1-1',
        children: [
          { value: 'suboption1-1-1', label: 'Sub Option 1-1-1' },
          { value: 'suboption1-1-2', label: 'Sub Option 1-1-2' },
        ],
      },
      {
        value: 'suboption1-2',
        label: 'Sub Option 1-2',
        children: [
          { value: 'suboption1-2-1', label: 'Sub Option 1-2-1' },
          { value: 'suboption1-2-2', label: 'Sub Option 1-2-2' },
        ],
      },
    ],
  },
  {
    value: 'option2',
    label: 'Option 2',
    children: [
      {
        value: 'suboption2-1',
        label: 'Sub Option 2-1',
        children: [
          { value: 'suboption2-1-1', label: 'Sub Option 2-1-1' },
          { value: 'suboption2-1-2', label: 'Sub Option 2-1-2' },
        ],
      },
      {
        value: 'suboption2-2',
        label: 'Sub Option 2-2',
        children: [
          { value: 'suboption2-2-1', label: 'Sub Option 2-2-1' },
          { value: 'suboption2-2-2', label: 'Sub Option 2-2-2' },
        ],
      },
    ],
  },
];

const Template = (args) => <Cascader {...args} />;

export const Default = Template.bind({});
Default.args = {
  options,
  placeholder: 'Select an option',
};
