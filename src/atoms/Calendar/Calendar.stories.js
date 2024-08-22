import React from 'react';
import Calendar from './Calendar';
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
  title: 'Form/Calendar',
  component: Calendar,
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
    align: 'center',
  },
};

const Template = (args) => (
  <>
    <Calendar />
  </>
);

export const Basic = Template.bind({});
Basic.parameters = {
  layout: 'centered',
};

Basic.args = {
  label: 'Toasts',
  backgroundColor: 'aliceblue',
  color: '#000000',
};
