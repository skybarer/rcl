import React from 'react';
import {Button} from './Button';
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

const Template = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.parameters = {
  // layout: 'fullscreen'
};

Basic.args = {
  label: 'My Button',
  backgroundColor: 'aliceblue',
  color: '#000000',
  borderRadius: '4px',
  disabled: false
};

