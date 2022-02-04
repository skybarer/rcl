import React from 'react';
import { Article } from './Article';
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
  title: 'atoms/Article/Basic',
  component: Article,
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

const Template = (args) => <Article {...args} />;

export const Basic = Template.bind({});
Basic.parameters = {
  layout: 'fullscreen'
};

Basic.args = {
  label: 'Article',
  backgroundColor: 'aliceblue',
  color: '#000000'
};
