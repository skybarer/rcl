import React from "react";
import TextField from "./TextField";
import LockIcon from "../../assets/icons/LockIcon";
import UserIcon from "../../assets/icons/UserIcon";

import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from "@storybook/addon-docs";

export default {
  title: "atoms/TextField",
  component: TextField,
  parameters: {
    options: { selectedPanel: "storybook/a11y/panel" },
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
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Enter text",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  placeholder: "Username",
  icon: <UserIcon />,
};

export const Multiline = Template.bind({});
Multiline.args = {
  placeholder: "Type a long text...",
  multiline: true,
};

export const WithError = Template.bind({});
WithError.args = {
  placeholder: "Type something",
  error: "This field is required",
};

export const WithAdornment = Template.bind({});
WithAdornment.args = {
  placeholder: "Password",
  adornment: <LockIcon />,
  type: "password",
};
