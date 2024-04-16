import React from 'react';
import { Avatar } from './Avatar';
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
  title: 'atoms/Avatar',
  component: Avatar,
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
      <Avatar
        src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
        size={50}
        alt="Small Avatar"
      />
      <Avatar
        src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
        size={100}
        alt="Large Avatar"
      />
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
