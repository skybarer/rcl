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
  title: 'atoms/Alerts/Basic',
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
  backgroundColor: 'aliceblue',
  color: '#000000'
};
