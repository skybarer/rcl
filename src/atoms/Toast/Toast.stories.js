import React from 'react';
import Toast from './Toast';
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
  title: 'atoms/Toast',
  component: Toast,
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
    <Toast message="This is a toast message" onClose={() => { }} />
  </>
);

export const Basic = Template.bind({});
Basic.parameters = {
  layout: 'fullscreen'

};

Basic.args = {
  label: 'Toasts',
  backgroundColor: 'aliceblue',
  color: '#000000'
};
