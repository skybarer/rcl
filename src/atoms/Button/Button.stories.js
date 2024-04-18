import React from 'react';
import Button from './Button';
import Space from './../Space/Space';
import Grid from '../Grid/Grid';
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
  },
};

const Template = (args) => (
  <>
    <Grid columns={9} gap={20}>
      <Button variant="btn-primary" {...args}>
        {args?.Children}
      </Button>

      <Button variant="btn-secondary" {...args}>
        {args?.Children}
      </Button>

      <Button variant="btn-success" {...args}>
        {args?.Children}
      </Button>

      <Button variant="btn-info" {...args}>
        {args?.Children}
      </Button>

      <Button variant="btn-danger" {...args}>
        {args?.Children}
      </Button>
    </Grid>
    <Space marginSize={5}></Space>
    <Grid columns={9} gap={20}>
      <Button variant="btn-light" {...args}>
        {args?.Children}
      </Button>

      <Button variant="btn-dark" {...args}>
        {args?.Children}
      </Button>

      <Button variant="btn-warning" {...args}>
        {args?.Children}
      </Button>

      <Button variant="btn-outline" {...args}>
        {args?.Children}
      </Button>
    </Grid>
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
