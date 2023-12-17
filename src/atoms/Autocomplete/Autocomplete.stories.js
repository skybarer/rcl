import React from "react";
import Autocomplete from "./Autocomplete";

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
  title: "atoms/Autocomplete",
  component: Autocomplete,
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

const Template = (args) => <Autocomplete {...args} />;

export const Default = Template.bind({});
Default.args = {
  suggestions: ["Apple", "Banana", "Cherry", "Date", "Grape"],
  onSelect: (selected) => console.log(`Selected: ${selected}`),
};
