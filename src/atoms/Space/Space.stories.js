// Card.stories.js
import React from 'react';
import Space from './Space';
import sizes from '../../json/sizes.json';
import styled, { css } from 'styled-components';
export default {
  title: 'Space',
  component: Space,
};

const customScale = {
  1: '10px',
  2: '20px',
  // ... add the rest of your scale here
};

const paddingVarients = {
  'pd-*': css`
    padding: ${({ marginScale, marginSize }) => marginScale[marginSize]};
  `
};

export const Default = () => (
  <>
    <Space marginSize={1}>
      <p>Your content here</p>
    </Space>

    <Space marginSize={1} customScale={customScale}>
      <p>Your content here</p>
    </Space>
  </>
);
