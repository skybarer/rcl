import React from 'react';
import Stepper from './Stepper';
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
  title: 'Form/Stepper',
  component: Stepper,
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

const Template = (args) => (
  <>
    <Stepper
      steps={['Step 1', 'Step 2', 'Step 3', 'Step 4']}
      currentStep={args?.currentStep}
    />
  </>
);

export const Basic = Template.bind({});
Basic.parameters = {
  layout: 'centered',
};

Basic.args = {
  currentStep: 1,
};
