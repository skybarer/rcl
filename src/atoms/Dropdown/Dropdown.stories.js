import React from 'react';
import Dropdown from './Dropdown';

import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';

export default {
  title: 'atoms/Dropdown',
  component: Dropdown,
  parameters: {
    options: { selectedPanel: 'storybook/a11y/panel' },
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const options = ['Account settings', 'Support', 'License', 'Sign out'];

const Template = (args) => (
  <>
    <Dropdown options={options} onSelect={() => 'Option Selected'} />
  </>
);

export const Basic = Template.bind({});
Basic.parameters = {
  layout: 'centered',
};

Basic.args = {
  label: 'Dropdowns',
  // backgroundColor: 'aliceblue',
  // color: '#000000'
};
