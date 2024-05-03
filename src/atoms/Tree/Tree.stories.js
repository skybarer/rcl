import React from 'react';
import { storiesOf } from '@storybook/react';
import Tree from './Tree';
import Node from './Node';

// Create a tree structure with open/close functionality
const MyTree = () => (
  <Tree>
    <Node label="Root">
      <Node label="Branch 1">
        <Node label="Leaf 1-1" />
        <Node label="Leaf 1-2">
          <Node label="Leaf 1-2-1" />
          <Node label="Leaf 1-2-2" />
        </Node>
      </Node>
      <Node label="Branch 2">
        <Node label="Leaf 2-1" />
      </Node>
    </Node>
  </Tree>
);

// Story for the Tree component in Storybook
storiesOf('Tree', module).add('With Open/Close', () => <MyTree />);
