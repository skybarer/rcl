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

const Template = (args) => (
  <Alerts
  className={args?.className}
    style={{ ...args.style }}
  >
    {args?.content}
  </Alerts>
);

export const Basic = Template.bind({});
Basic.parameters = {
  layout: 'fullscreen'
};

Basic.args = {
  className: 'alert',
  style: {  color: '#000000', backgroundColor: 'aliceblue' },
  content: 'This is a basic alert',
};



export const Danger = Template.bind({});
Danger.parameters = {
  layout: 'fullscreen'
};

Danger.args = {
  content: 'This is a basic alert',
  className: 'alert',
  backgroundColor: '#e74c3c',
  color: '#000000'
};


export const Bottonm = Template.bind({});
Bottonm.parameters = {
  layout: 'fullscreen'
};

Bottonm.args = {
  style: { color: '#fff' },
  className: 'alert-bottom',
  content: <a href="https://www.pluralsight.com/privacy" style={{ color: 'white' }}>Learn more about your privacy</a>,
};
