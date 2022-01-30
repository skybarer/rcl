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
  title: 'atoms/Badge/Basic',
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

const Template = (args) => <Badge {...args} />;

export const Basic = Template.bind({});
Basic.parameters = {
  layout: 'fullscreen'
};

Basic.args = {
  content: '51+',
  backgroundColor: 'aliceblue',
  color: 'black',
  padding: '2px 6px',
  borderRadius: '1.5em'
};
