import React from 'react';
import { Alerts } from './Alerts';
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
  title: 'atoms/Alerts',
  component: Alerts,
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

const Template = (args) => <Alerts {...args} />;

export const Basic = Template.bind({});
Basic.parameters = {
};

Basic.args = {
  label: 'Alerts',
  className: 'alert',
  backgroundColor: 'aliceblue',
  color: '#000000'
};



export const Danger = Template.bind({});
Danger.parameters = {
  layout: 'fullscreen'
};

Danger.args = {
  label: 'Alerts',
  className: 'alert',
  backgroundColor: '#e74c3c',
  color: '#000000'
};


export const Bottonm = Template.bind({});
Bottonm.parameters = {
  layout: 'fullscreen'
};

Bottonm.args = {
  className: 'alert-bottom',
  label: '<a href="https://www.pluralsight.com/privacy" class="svelte-10xdqkv">Learn more about your privacy</a>',
};
