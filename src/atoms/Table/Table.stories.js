import React from 'react';
import Table from './Table';
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
  title: 'atoms/Table/Basic',
  component: Table,
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

const Template = (args) => <Table {...args} />;

export const Basic = Template.bind({});
Basic.parameters = {
  layout: 'centered',

};

Basic.args = {
  label: 'Table',
  backgroundColor: 'aliceblue',
  color: '#000000'
};
