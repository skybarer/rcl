import React from 'react';
import { Badge } from './Badge';
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
  title: 'atoms/Badge',
  component: Badge,
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

const Template = (args) => {
  return (
    <>
      <Badge>Default Badge</Badge>
      <Badge color="#28a745">Success Badge</Badge>
      <Badge color="red">51+</Badge>
    </>
  );
};

export const Basic = Template.bind({});
Basic.parameters = {
  layout: 'centered',
};

// Basic.args = {
//   content: '51+',
// };

export const Teal = () => (
  <Badge className="badge badge-lg badge-accented teal">
    Black Friday Sale
  </Badge>
);
export const Yellow = () => (
  <Badge className="badge badge-accented yellow">Best Seller</Badge>
);
export const Green = () => (
  <Badge className="badge badge-accented green">New</Badge>
);
export const Default = () => (
  <Badge className="badge badge-accented">Akash</Badge>
);

export const Quest = () => <Badge type="quest">Question</Badge>;
export const Forum = () => <Badge type="forum">Discussion</Badge>;
