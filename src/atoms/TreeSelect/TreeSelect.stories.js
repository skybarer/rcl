import React from 'react';
import { TreeSelect } from './TreeSelect';

export default {
  title: 'TreeSelect',
  component: TreeSelect,
};

const treeData = [
  {
    id: '1',
    label: 'Node 1',
    children: [
      {
        id: '1-1',
        label: 'Child 1-1',
        children: [
          { id: '1-1-1', label: 'Grandchild 1-1-1' },
          { id: '1-1-2', label: 'Grandchild 1-1-2' },
        ],
      },
      { id: '1-2', label: 'Child 1-2' },
    ],
  },
  {
    id: '2',
    label: 'Node 2',
    children: [{ id: '2-1', label: 'Child 2-1' }],
  },
];

const Template = (args) => <TreeSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
  treeData: treeData,
  onNodeSelect: (nodeId) => console.log('Node selected:', nodeId),
};

export const Empty = Template.bind({});
Empty.args = {
  treeData: [],
  onNodeSelect: (nodeId) => console.log('Node selected:', nodeId),
};
