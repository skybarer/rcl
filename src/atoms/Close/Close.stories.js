import React from 'react';
import Close from './Close';
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
  title: 'atoms/Close/Basic',
  component: Close,
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

const Template = (args) => <Close {...args} />;

export const Basic = Template.bind({});
Basic.parameters = {
  layout: 'centered',

};

Basic.args = {
  label: 'Close',
  backgroundColor: 'aliceblue',
  color: '#000000'
};
