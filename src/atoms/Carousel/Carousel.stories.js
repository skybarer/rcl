import React from 'react';
import Carousel from './Carousel';

import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
import { CarouselItem } from './CarouselItem';

export default {
  title: 'atoms/Carousel/Basic',
  component: Carousel,
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
  <Carousel {...args}>
    <CarouselItem>item1</CarouselItem>
    <CarouselItem>item2</CarouselItem>
    <CarouselItem>item3</CarouselItem>
    <CarouselItem>item4</CarouselItem>
    <CarouselItem>item5</CarouselItem>
  </Carousel>
);

export const Basic = Template.bind({});
Basic.parameters = {
  layout: 'fullscreen'

};

Basic.args = {
 
};
