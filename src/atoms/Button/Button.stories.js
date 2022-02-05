import React from 'react';
import Button from './Button';
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
  title: 'atoms/Button',
  component: Button,
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

  }
};

const Template = (args) => (
  <Button {...args} style={args.style} disabled={args.disabled}>
    <strong>Button</strong>
  </Button>
);

export const Basic = Template.bind({});
Basic.parameters = {
  // layout: 'fullscreen'
};

Basic.args = {
  // label: 'My Button',
  // backgroundColor: 'aliceblue',
  // color: '#000000',
  // borderRadius: '4px',
  style: {
    color: '#000000',
    backgroundColor: 'aliceblue',
    padding: '1rem 2rem',
    border: 0,
    borderRadius: '4px',
    cursor: 'pointer',
  },
  disabled: false
};

