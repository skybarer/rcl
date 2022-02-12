import React from 'react';
import { Badge } from './Badge';
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
  title: 'atoms/Badge',
  component: Badge,
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
  <Badge>
    {args.content}
  </Badge>

);

export const Basic = Template.bind({});
Basic.parameters = {
  layout: 'centered'
};

Basic.args = {
  content: '51+',
 
};
