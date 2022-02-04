import React from 'react';
import Dropdowns from './Dropdowns';
import List from './../List/List';
import { ListItem } from './../List/ListItem';

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
  title: 'atoms/Dropdowns',
  component: Dropdowns,
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
  <Dropdowns>
    <List type='bottomBorder' style={{width: '120px'}}>
      <ListItem>
        <a href="#">Link 1</a>
      </ListItem>
      <ListItem>
        <a href="#">Link 2</a>
      </ListItem>
      <ListItem>  
        <a href="#">Link 3</a>
      </ListItem>
    </List>
  </Dropdowns>
);

export const Basic = Template.bind({});
Basic.parameters = {
  // layout: 'fullscreen'

};

Basic.args = {
  label: 'Dropdowns',
  // backgroundColor: 'aliceblue',
  // color: '#000000'
};
