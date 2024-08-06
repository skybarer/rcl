// src/components/CompareDevices.js
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Table = styled.div`
  display: table;
  width: 100%;
  margin: 20px 0;
`;

const TableRow = styled.div`
  display: table-row;
`;

const TableCell = styled.div`
  display: table-cell;
  padding: 10px;
  vertical-align: top;
`;

const DeviceImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const DeviceName = styled.h2`
  font-size: 1.2em;
  margin: 10px 0;
`;

const DeviceSpecs = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SpecItem = styled.li`
  margin: 5px 0;
`;

const CompareDevices = ({ devices }) => (
  <Table>
    <TableRow>
      {devices.map((device, index) => (
        <TableCell key={index}>
          <DeviceImage src={device.image} alt={device.name} />
          <DeviceName>{device.name}</DeviceName>
          <DeviceSpecs>
            {device.specs.map((spec, specIndex) => (
              <SpecItem key={specIndex}>{spec}</SpecItem>
            ))}
          </DeviceSpecs>
        </TableCell>
      ))}
    </TableRow>
  </Table>
);

CompareDevices.propTypes = {
  devices: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      specs: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ).isRequired,
};

export default CompareDevices;
