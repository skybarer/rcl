import React from 'react';
import Table from './Table';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableCell from './TableCell';
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
  },
};
const headers = ['Name', 'Age', 'Country'];
const data = [
  ['Alice', 30, 'USA'],
  ['Bob', 35, 'Canada'],
  ['Eve', 25, 'UK'],
];

const Template = (args) => (
  <>
    {/* <Table headers={headers} data={data} /> */}
    <Table>
      <thead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Age</TableHeader>
          <TableHeader>Country</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        <TableRow>
          <TableCell>Row 1, Cell 1</TableCell>
          <TableCell>Row 1, Cell 2</TableCell>
          <TableCell>Row 1, Cell 3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Row 2, Cell 1</TableCell>
          <TableCell>Row 2, Cell 2</TableCell>
          <TableCell>Row 2, Cell 3</TableCell>
        </TableRow>
      </tbody>
    </Table>
  </>
);

export const Basic = Template.bind({});
Basic.parameters = {
  layout: 'fullscreen',
};

Basic.args = {

};
