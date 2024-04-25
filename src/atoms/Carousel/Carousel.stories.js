import React from 'react';
import Carousel from './Carousel';
import image1 from '../../assets/images/image-1.jpeg';
import image2 from '../../assets/images/image-2.jpeg';
import image3 from '../../assets/images/image-3.jpeg';
import image4 from '../../assets/images/image-4.jpeg';
import image5 from '../../assets/images/image-5.jpeg';

import { CarouselItem } from './CarouselItem';

export default {
  title: 'atoms/Carousel',
  component: Carousel,
};

const Template = (args) => (
  <>
    <Carousel {...args}>
      <CarouselItem>
        <img src={image1} alt="image1" style={{ width: '100%' }}></img>
      </CarouselItem>
      <CarouselItem>
        <img src={image2} alt="image1" style={{ width: '100%' }}></img>
      </CarouselItem>
      <CarouselItem>
        <img src={image3} alt="image1" style={{ width: '100%' }}></img>
      </CarouselItem>
      <CarouselItem>
        <img src={image4} alt="image1" style={{ width: '100%' }}></img>
      </CarouselItem>
      <CarouselItem>
        <img src={image5} alt="image1" style={{ width: '100%' }}></img>
      </CarouselItem>
    </Carousel>
  </>
);

export const Basic = Template.bind({});
Basic.parameters = {
  layout: 'fullscreen',
};

Basic.args = {};
