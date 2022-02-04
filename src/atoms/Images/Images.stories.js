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
  title: 'atoms/Images',
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

const Template = (args) => (
  <Images
    style={{ width: '200px', height: '200px' }}
    {...args}
  />
);

export const Basic = Template.bind({});
Basic.parameters = {
  layout: 'centered'
};

Basic.args = {
  className: '',
};

export const Rounded = Template.bind({});
Rounded.parameters = {
  layout: 'centered'
}

Rounded.args = {
  className: 'rounded',
};

export const edgeRounded = Template.bind({});
edgeRounded.parameters = {
  layout: 'centered'
}

edgeRounded.args = {
  className: 'edge-rounded',
};
