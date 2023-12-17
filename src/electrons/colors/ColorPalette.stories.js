// src/ColorPalette.stories.js
import React from 'react';
import ColorPalette from '../colors/colorPalette'; // Import your color palette object
import styled from 'styled-components';
import colorJson from './colors.json';

const ColorSwatch = styled.div`
  width: 100px;
  height: 50px;
  margin: 8px;
  background-color: ${(props) => props.color};
`;

export default {
  title: 'Design System/Color Palette',
  parameters: {
    component: ColorPalette,
    componentSubtitle:
      'A carefully chosen color palette for the React component library.',
  },
};

export const BaseColors = () => (
  <div>
    <h2>Base Colors</h2>
    {Object.keys(colorJson.baseColors).map((colorKey) => (
      <div key={colorKey}>
        <span>{colorKey}:</span>
        <span>{colorJson.baseColors[colorKey]}</span>
        <ColorSwatch key={colorKey} color={colorJson.baseColors[colorKey]} />
      </div>
    ))}
  </div>
);

export const TextColors = () => (
  <div>
    <h2>Text Colors</h2>
    {Object.keys(colorJson.textColors).map((colorKey) => (
      <div key={colorKey}>
        <span>{colorKey}:</span>
        <span>{colorJson.textColors[colorKey]}</span>
        <ColorSwatch key={colorKey} color={colorJson.textColors[colorKey]} />
      </div>
    ))}
  </div>
);

export const BorderColors = () => (
  <div>
    <h2>Border Colors</h2>
    {Object.keys(colorJson.borderColors).map((colorKey) => (
      <div key={colorKey}>
        <span>{colorKey}:</span>
        <span>{colorJson.borderColors[colorKey]}</span>
        <ColorSwatch key={colorKey} color={colorJson.borderColors[colorKey]} />
      </div>
    ))}
  </div>
);

export const ButtonColors = () => (
  <div>
    <h2>Border Colors</h2>
    {Object.keys(colorJson.buttonColors).map((colorKey) => (
      <div key={colorKey}>
        <span>{colorKey}:</span>
        <span>{colorJson.buttonColors[colorKey]}</span>
        <ColorSwatch key={colorKey} color={colorJson.buttonColors[colorKey]} />
      </div>
    ))}
  </div>
);

export const AdditionalColors = () => (
  <div>
    <h2>Border Colors</h2>
    {Object.keys(colorJson.additionalColors).map((colorKey) => (
      <div key={colorKey}>
        <span>{colorKey}:</span>
        <span>{colorJson.additionalColors[colorKey]}</span>
        <ColorSwatch
          key={colorKey}
          color={colorJson.additionalColors[colorKey]}
        />
      </div>
    ))}
  </div>
);
// Add more stories for Button Colors, Additional Colors, etc.
