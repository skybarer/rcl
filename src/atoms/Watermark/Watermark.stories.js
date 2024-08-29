import React from 'react';
import { Watermark } from './Watermark';
import styled from 'styled-components';

export default {
  title: 'Watermark',
  component: Watermark,
};

// const Content = styled.div`
//   width: 400px;
//   height: 300px;
//   background-color: #f0f0f0;
//   text-align: center;
//   line-height: 300px;
//   position: relative;
//   overflow: hidden;
// `;

const FullPageContent = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f8f8f8;
  position: relative;
`;

const Template = (args) => (
  <Watermark {...args}>
    <FullPageContent>Protected Content Area</FullPageContent>
  </Watermark>
);

export const MultiLineTextWatermark = Template.bind({});
MultiLineTextWatermark.args = {
  text: 'Sample Watermark',
  color: 'rgba(0, 0, 0, 0.1)',
  fontSize: '36px',
  opacity: 0.3,
  rotate: -30,
  spacing: 150,
};

export const MultiLineImageWatermark = Template.bind({});
MultiLineImageWatermark.args = {
  image: 'https://via.placeholder.com/150',
  opacity: 0.2,
  rotate: -30,
  spacing: 200,
};
