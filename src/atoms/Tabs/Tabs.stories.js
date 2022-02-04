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

const Template = (args) => (
  // <Tabs {...args} >
  //   <Tab>
  //     item1
  //   </Tab>
  //   <Tab>
  //     item2
  //   </Tab>
  //   <Tab>
  //     item3
  //   </Tab>
  // </Tabs>

  <Tabs>
    <div label="item1">
      See ya later, <em>Alligator</em>!
    </div>
    <div label="item2">
      After 'while, <em>Crocodile</em>!
    </div>
    <div label="item3">
      Nothing to see here, this tab is <em>extinct</em>!
    </div>
  </Tabs>
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
