import React from 'react';
import { TransferList } from './TransferList';

export default {
  title: 'TransferList',
  component: TransferList,
};

const Template = (args) => <TransferList {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialLeftItems: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
  initialRightItems: ['Item 5', 'Item 6'],
  onTransfer: (from, to) => console.log('Transfer occurred:', from, to),
};

export const Empty = Template.bind({});
Empty.args = {
  initialLeftItems: [],
  initialRightItems: [],
  onTransfer: (from, to) => console.log('Transfer occurred:', from, to),
};
