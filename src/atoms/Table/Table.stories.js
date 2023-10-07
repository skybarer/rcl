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
  title: 'atoms/Table',
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
const headers = ['Name', 'Age', 'Country'];
const data = [
  ['Alice', 30, 'USA'],
  ['Bob', 35, 'Canada'],
  ['Eve', 25, 'UK'],
];

const Template = (args) => (
  <>
    <Table headers={headers} data={data} />
  </>
);

export const Basic = Template.bind({});
Basic.parameters = {
  layout: 'fullscreen'

};

Basic.args = {
  label: 'Table',
  backgroundColor: 'aliceblue',
  color: '#000000'
};
