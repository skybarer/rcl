import React from 'react';
import Images from './Images';
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
  title: 'atoms/Images/Basic',
  component: Images,
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

const Template = (args) => <Images {...args} />;

export const Basic = Template.bind({});
Basic.parameters = {
  layout: 'centered',

};

Basic.args = {
  label: 'Images',
  backgroundColor: 'aliceblue',
  color: '#000000'
};
