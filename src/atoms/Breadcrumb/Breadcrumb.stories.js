import React from 'react';
import Breadcrumb from './Breadcrumb';
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
  title: 'atoms/Breadcrumb',
  component: Breadcrumb,
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


const selected = crumb => {
  console.log(crumb);
}
const crumbs = ['Home', 'Category', 'Sub Category']

const Template = (args) => <Breadcrumb {...args} crumbs={crumbs} selected={selected} />;

export const Basic = Template.bind({});
Basic.parameters = {
  layout: 'centered'

};

Basic.args = {
  label: 'Breadcrumb',
  backgroundColor: 'aliceblue',
  color: '#000000'
};
