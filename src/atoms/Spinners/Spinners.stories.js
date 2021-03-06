import React from 'react';
import Spinners from './Spinners';
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
  title: 'atoms/Spinners',
  component: Spinners,
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

const Template = (args) => <Spinners {...args} />;

export const Circular = Template.bind({});
Circular.parameters = {
  layout: 'centered'

};

Circular.args = {
  label: 'Spinners',
  backgroundColor: 'aliceblue',
  color: '#000000'
};
