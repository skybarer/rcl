import React from 'react';
import Navbar from './Navbar';
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
  title: 'atoms/Navbar/Basic',
  component: Navbar,
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

const Template = (args) => <Navbar {...args} />;

export const Basic = Template.bind({});
Basic.parameters = {
  layout: 'centered',

};

Basic.args = {
  label: 'Navbar',
  backgroundColor: 'aliceblue',
  color: '#000000'
};
