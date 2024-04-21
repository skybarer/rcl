// src/components/GlowText.stories.js
import React from 'react';
import GlowText from './GlowText';

export default {
  title: 'GlowText',
  component: GlowText,
};

export const Text = () => <GlowText>This is a glowing text</GlowText>;
export const Button = () => (
  <GlowText isButton>This is a glowing text</GlowText>
);
