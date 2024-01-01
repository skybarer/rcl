// src/ColorPalette.stories.js
import React from 'react';
import ColorPalette from '../colors/colorPalette'; // Import your color palette object
import styled from 'styled-components';
import colorJson from './colors.json';
import Table from '../../atoms/Table/Table';
import TableHeader from '../../atoms/Table/TableHeader';
import TableRow from '../../atoms/Table/TableRow';
import TableCell from '../../atoms/Table/TableCell';

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

export const TestColors = () => (
  <div>

    {/* {Object.keys(colorJson).map((colorItem) => (
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Index</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>CSS Variable</TableHeader>
            <TableHeader>HexValue</TableHeader>
            <TableHeader>Color</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {Object.keys(colorItem).map((colorKey, index) => (
            <TableRow>
              <TableCell>{index}</TableCell>
              <TableCell>{colorItem[colorKey]}</TableCell>
              <TableCell>bs-{colorKey}</TableCell>
              <TableCell>{colorItem[colorKey]}</TableCell>
              <TableCell style={{ backgroundColor: colorItem[colorKey] }} ></TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>

    ))} */}
  </div >
);

export const BaseColors = () => (
  <div>
    <h2>Base Colors</h2>
    <Table>
      <thead>
        <TableRow>
          <TableHeader>Index</TableHeader>
          <TableHeader>Name</TableHeader>
          <TableHeader>CSS Variable</TableHeader>
          <TableHeader>HexValue</TableHeader>
          <TableHeader>Color</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        {Object.keys(colorJson.baseColors).map((colorKey, index) => (
          <TableRow>
            <TableCell>{index}</TableCell>
            <TableCell>{colorKey}</TableCell>
            <TableCell>bs-{colorKey}</TableCell>
            <TableCell>{colorJson.baseColors[colorKey]}</TableCell>
            <TableCell style={{ backgroundColor: colorJson.baseColors[colorKey] }} ></TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  </div >
);

export const TextColors = () => (
  <div>
    <h2>Text Colors</h2>
    <Table>
      <thead>
        <TableRow>
          <TableHeader>Index</TableHeader>
          <TableHeader>Name</TableHeader>
          <TableHeader>CSS Variable</TableHeader>
          <TableHeader>HexValue</TableHeader>
          <TableHeader>Color</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        {Object.keys(colorJson.textColors).map((colorKey, index) => (
          <TableRow>
            <TableCell>{index}</TableCell>
            <TableCell>{colorKey}</TableCell>
            <TableCell>{colorJson.textColors[colorKey]}</TableCell>
            <TableCell style={{ backgroundColor: colorJson.textColors[colorKey] }} ></TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  </div>
);

export const BorderColors = () => (
  <div>
    <h2>Border Colors</h2>
    <Table>
      <thead>
        <TableRow>
          <TableHeader>Index</TableHeader>
          <TableHeader>Name</TableHeader>
          <TableHeader>HexValue</TableHeader>
          <TableHeader>Color</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        {Object.keys(colorJson.borderColors).map((colorKey, index) => (
          <TableRow>
            <TableCell>{index}</TableCell>
            <TableCell>{colorKey}</TableCell>
            <TableCell>{colorJson.borderColors[colorKey]}</TableCell>
            <TableCell style={{ backgroundColor: colorJson.borderColors[colorKey] }} ></TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  </div>
);

export const ButtonColors = () => (
  <div>
    <h2>Border Colors</h2>
    <Table>
      <thead>
        <TableRow>
          <TableHeader>Index</TableHeader>
          <TableHeader>Name</TableHeader>
          <TableHeader>HexValue</TableHeader>
          <TableHeader>Color</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        {Object.keys(colorJson.buttonColors).map((colorKey, index) => (
          <TableRow>
            <TableCell>{index}</TableCell>
            <TableCell>{colorKey}</TableCell>
            <TableCell>{colorJson.buttonColors[colorKey]}</TableCell>
            <TableCell style={{ backgroundColor: colorJson.buttonColors[colorKey] }} ></TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  </div>
);

export const AdditionalColors = () => (
  <div>
    <h2> Additional Colors</h2>
    <Table>
      <thead>
        <TableRow>
          <TableHeader>Index</TableHeader>
          <TableHeader>Name</TableHeader>
          <TableHeader>HexValue</TableHeader>
          <TableHeader>Color</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        {Object.keys(colorJson.additionalColors).map((colorKey, index) => (
          <TableRow>
            <TableCell>{index}</TableCell>
            <TableCell>{colorKey}</TableCell>
            <TableCell>{colorJson.additionalColors[colorKey]}</TableCell>
            <TableCell style={{ backgroundColor: colorJson.additionalColors[colorKey] }} ></TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  </div>
);
// Add more stories for Button Colors, Additional Colors, etc.
