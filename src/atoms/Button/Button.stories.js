import React from 'react';
import Button from './Button';
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
  title: 'atoms/Button',
  component: Button,
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

  }
};

const Template = (args) => (
  <>
    <Button {...args}>
      <strong>{args?.Children}</strong>
    </Button>

  </>

);

export const Basic = Template.bind({});
Basic.parameters = {
  // layout: 'fullscreen'
};

Basic.args = {
  Children: 'My Button',
  disabled: false,
};


// src/stories/Button.stories.js
// import React from 'react';
// import { storiesOf } from '@storybook/react';
// import { withKnobs, boolean } from '@storybook/addons';
// import Button from './Button';

// const stories = storiesOf('Button', module);
// stories.addDecorator(withKnobs);

// stories.add('Primary', () => (
//   <Button primary={boolean('Primary', true)}>Primary Button</Button>
// ));

// stories.add('Secondary', () => (
//   <Button primary={boolean('Primary', false)}>Secondary Button</Button>
// ));

