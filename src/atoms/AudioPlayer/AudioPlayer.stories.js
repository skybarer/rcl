// src/components/AudioPlayer.stories.js
import React from 'react';
import AudioPlayer from './AudioPlayer';

export default {
  title: 'AudioPlayer',
  component: AudioPlayer,
};

const Template = (args) => <AudioPlayer {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  title: 'How to get balance in your work',
  artist: 'MAKE O’HEARN',
  duration: '2 hours and 20 minutes',
  cover: 'https://via.placeholder.com/60', // Replace with an actual image URL
};
