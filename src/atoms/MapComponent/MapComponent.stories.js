// src/components/MapComponent.stories.jsx
import React from 'react';
import MapComponent from './MapComponent';

export default {
  title: 'MapComponent',
  component: MapComponent,
  argTypes: {
    apiKey: { control: 'text' },
    center: { control: 'object' },
    zoom: { control: 'number' },
    markers: { control: 'array' },
    height: { control: 'text' },
    width: { control: 'text' },
  },
};

const Template = (args) => <MapComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  apiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // Replace with your actual API key for testing
  center: { lat: 37.7749, lng: -122.4194 },
  zoom: 10,
  markers: [
    { position: { lat: 37.7749, lng: -122.4194 }, label: 'San Francisco' },
    { position: { lat: 34.0522, lng: -118.2437 }, label: 'Los Angeles' },
  ],
  height: '500px',
  width: '800px',
};
