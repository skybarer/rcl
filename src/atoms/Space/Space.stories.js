// Card.stories.js
import React from 'react';
import Space from './Space';
import sizes from '../../json/sizes.json';
import styled from 'styled-components';
import Table from './../Table/Table';
import TableRow from './../Table/TableRow';
import TableHeader from './../Table/TableHeader';
import TableCell from './../Table/TableCell';
export default {
  title: 'Space',
  component: Space,
};

const customScale = {
  1: '10px',
  2: '20px',
  // ... add the rest of your scale here
};

// const paddingVarients = {
//   'pd-*': css`
//     padding: ${({ marginScale, marginSize }) => marginScale[marginSize]};
//   `,
// };

const SpaceBox = styled.div`
  box-sizing: border-box;
  appearance: none;
  border: none;
  background-color: #9f8fef;
  padding-block: 0.5rem 8px;
`;

export const Default = () => (
  <>
    <Space marginSize={1}>
      <p>Your content here</p>
    </Space>

    <Space marginSize={1} customScale={customScale}>
      <p>Your content here</p>
    </Space>

    <Table>
      <thead>
        <TableRow>
          {/* <TableHeader>INDEX</TableHeader> */}
          <TableHeader>Type</TableHeader>
          <TableHeader>Representation</TableHeader>
          <TableHeader>Rem</TableHeader>
          <TableHeader>Visual representation</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        {Object.keys(sizes).map((spaceKey, index) => (
          <TableRow>
            {/* <TableCell>{index}</TableCell> */}
            <TableCell>{spaceKey}</TableCell>
            <TableCell>space.{spaceKey}</TableCell>
            <TableCell>{sizes[spaceKey]}</TableCell>
            <TableCell>
              <SpaceBox style={{ width: sizes[spaceKey] }}></SpaceBox>
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  </>
);
