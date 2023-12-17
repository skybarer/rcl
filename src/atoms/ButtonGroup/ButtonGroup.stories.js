import React from "react";
// import ButtonGroup from "./ButtonGroup";
import { ButtonGroup, Button } from "./ButtonGroup";

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
  title: "atoms/ButtonGroup",
  component: ButtonGroup,
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

const Template = (args) => (
  <ButtonGroup {...args}>
    <Button primary>Primary </Button>
    <Button>Secondary </Button>
    <Button>Another </Button>
  </ButtonGroup>
);

export const Basic = Template.bind({});
Basic.parameters = {
  layout: "centered",
};

Basic.args = {
  label: "Buttons",
  backgroundColor: "aliceblue",
  color: "#000000",
};
