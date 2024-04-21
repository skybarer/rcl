// src/components/GradientText.stories.js
import React from 'react';
import GradientText from './GradientText';

export default {
  title: 'GradientText',
  component: GradientText,
};

export const Text = () => <GradientText variant="text" />;
export const Text1 = () => <GradientText variant="text1" />;
export const Text2 = () => <GradientText variant="text2" />;
