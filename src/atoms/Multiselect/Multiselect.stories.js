import React from "react";
import Multiselect from "./Multiselect";

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
  title: "atoms/Multiselect",
  component: Multiselect,
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

const Template = (args) => <Multiselect {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  onChange: (selectedOptions) =>
    console.log("Selected options:", selectedOptions),
};
