import React from 'react';
import Tabs from './Tabs';
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
  title: 'atoms/Tabs',
  component: Tabs,
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

const tabs = [
  { label: 'Tab 1', content: 'Content for Tab 1' },
  { label: 'Tab 2', content: 'Content for Tab 2' },
  { label: 'Tab 3', content: 'Content for Tab 3' },
];


const Template = (args) => (
  <>
    <Tabs tabs={tabs} />
  </>
);

export const Basic = Template.bind({});
Basic.parameters = {
  // layout: 'fullscreen'

};

Basic.args = {
  label: 'Tabs',
  backgroundColor: 'aliceblue',
  color: '#000000'
};
