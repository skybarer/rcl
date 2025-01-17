import React from 'react';
import Navbar from './Navbar';
import './Navbar.css';
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
  title: 'atoms/Navbar',
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
  },
};

const Template = (args) => (
  <Navbar
    label="My Website"
    backgroundColor="red"
    style={{ backgroundColor: 'black', color: 'white' }}
  >
    <button>Home</button>
    <button>About</button>
    <button>Contact</button>
  </Navbar>
);

export const Basic = Template.bind({});
Basic.parameters = {
  layout: 'fullscreen',
};

Basic.args = {
  label: 'Navbar',
  backgroundColor: 'aliceblue',
  color: '#000000',
};
