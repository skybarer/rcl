import React from 'react';
import { Accordion } from './Accordion';
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
  title: 'atoms/Accordion/Basic',
  component: Accordion,
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

const Template = (args) => <Accordion {...args} />;

export const Basic = Template.bind({});
Basic.parameters = {

};

Basic.args = {
  title: 'title',
  content: 'content',
  label: 'Accordion',
  backgroundColor: 'aliceblue',
  color: '#000000'
};
