import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  background-color: #f2f2f2;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;

const PricingTable = ({ plans }) => (
  <Table>
    <thead>
      <tr>
        <TableHeader>Plan</TableHeader>
        <TableHeader>Price</TableHeader>
        {plans[0].features.map((feature, index) => (
          <TableHeader key={index}>{feature}</TableHeader>
        ))}
      </tr>
    </thead>
    <tbody>
      {plans.map((plan, index) => (
        <TableRow key={index}>
          <TableCell>{plan.name}</TableCell>
          <TableCell>{plan.price}</TableCell>
          {plan.features.map((feature, index) => (
            <TableCell key={index}>{feature ? '✔️' : '❌'}</TableCell>
          ))}
        </TableRow>
      ))}
    </tbody>
  </Table>
);

PricingTable.propTypes = {
  plans: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      features: PropTypes.arrayOf(PropTypes.bool).isRequired,
    }),
  ).isRequired,
};

export default PricingTable;
