import React from 'react';
import Placeholder from './Placeholder';
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
  title: 'atoms/Placeholder/Basic',
  component: Placeholder,
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

const Template = (args) => <Placeholder {...args} />;

export const Basic = Template.bind({});
Basic.parameters = {
  layout: 'fullscreen'

};

Basic.args = {
  label: 'Placeholder',
  backgroundColor: 'aliceblue',
  color: '#000000'
};
