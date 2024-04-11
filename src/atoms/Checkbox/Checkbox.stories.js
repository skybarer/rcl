import React from 'react';
import Checkbox from './Checkbox';

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
  title: 'atoms/Checkbox',
  component: Checkbox,
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

const Template = (args) => (
  <Checkbox label={args.label} onCheckChange={args.checked} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Check me',
  checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  label: 'I am checked',
  checked: true,
};
