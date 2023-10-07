import React from 'react';
import Popover from './Popover';
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
  title: 'atoms/Popover',
  component: Popover,
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
  <>
    <Popover
      trigger={<button>Hover or Click Me!</button>}
      content={<div>This is the popover content</div>}
    />
  </>
)
export const Basic = Template.bind({});
Basic.parameters = {
  layout: 'fullscreen'

};

Basic.args = {
  label: 'Popovers',
  backgroundColor: 'aliceblue',
  color: '#000000'
};
