import React from 'react';
import Close from './Close';
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
  title: 'atoms/Close',
  component: Close,
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

const Template = (args) => <Close {...args} className={args.className} />;

export const Rounded = Template.bind({});
Rounded.parameters = {
  layout: 'centered'
};

Rounded.args = {
  className: 'rcl-close'
};

export const HoverSquare = Template.bind({});
HoverSquare.parameters = {
  layout: 'centered',
};


HoverSquare.args = {
  className: 'rcl-close-rounded'
};
