import React from 'react';
import Pagination from './Pagination';
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
  title: 'atoms/Pagination',
  component: Pagination,
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
    <Pagination totalPages={5} currentPage={3} onPageChange={(pageNumber) => console.log(`Go to page ${pageNumber}`)} />
  </>
);

export const Basic = Template.bind({});
Basic.parameters = {
  layout: 'fullscreen'

};

Basic.args = {
  label: 'Pagination',
  backgroundColor: 'aliceblue',
  color: '#000000'
};
