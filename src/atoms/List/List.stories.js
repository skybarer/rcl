import React from 'react';
import List from './List';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
import { ListItem } from './ListItem';

export default {
  title: 'atoms/List',
  component: List,
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
  <List {...args} type={args.type}>
    <ListItem >
      first item in the list
    </ListItem>
    <ListItem>
      second item in the list
    </ListItem>
    <ListItem>
      third item in the list
    </ListItem>
  </List >
);

export const Basic = Template.bind({});
Basic.parameters = {

};

Basic.args = {
  type: 'default',
};


export const bottomBorder = Template.bind({});
bottomBorder.parameters = {

};

bottomBorder.args = {
  type: 'bottomBorder',
};
