import React from 'react';
import TextField from './TextField';
import LockIcon from '../../assets/react-svg/LockIcon';
import { action } from '@storybook/addon-actions';

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
  title: 'Form/TextField',
  component: TextField,
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

const Template = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter text',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  placeholder: 'Username',
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="7" r="4" />
      <path d="M5 22s1.5-3 3-3h8c1.5 0 3 3 3 3" />
    </svg>
  ),
};

export const Multiline = Template.bind({});
Multiline.args = {
  placeholder: 'Type a long text...',
  multiline: true,
};

export const WithError = Template.bind({});
WithError.args = {
  placeholder: 'Type something',
  error: 'This field is required',
};

export const WithAdornment = Template.bind({});
WithAdornment.args = {
  placeholder: 'Password',
  adornment: <LockIcon />,
  type: 'password',
};

export const Standard = () => (
  <TextField variant="standard" onChange={action('changed')} />
);
export const Outlined = () => (
  <TextField variant="outlined" onChange={action('changed')} />
);
export const Filled = () => (
  <TextField variant="filled" onChange={action('changed')} />
);
