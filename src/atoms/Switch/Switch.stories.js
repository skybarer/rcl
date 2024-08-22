import React from 'react';
import Switch from './Switch';
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
  title: 'Form/Switch',
  component: Switch,
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
  <>
    <Switch checked={args?.checked} onChange={() => 'onChange'} />
  </>
);

export const Basic = Template.bind({});
Basic.parameters = {
  layout: 'fullscreen',
};

Basic.args = {
  label: 'Table',
  backgroundColor: 'aliceblue',
  color: '#000000',
  checked: false,
};
