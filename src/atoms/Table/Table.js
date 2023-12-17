// Table.js
import React from 'react';
import styled from 'styled-components';

const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  /* margin-bottom: 20px; */
  box-sizing: border-box;
  text-indent: initial;
  border-spacing: 2px;
  border-color: gray;
`;

const TableHeader = styled.th`
  background-color: #f4f4f4;
  padding: 0.45rem;
  text-align: left;
  vertical-align: middle;
  border-color: inherit;
  border-top: 1px solid #e5e5e5;
  color: #111010;
`;

const TableRow = styled.tr`
  border-top: 1px solid #e5e5e5;
  border-left: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
  line-height: 24px;
  &:last-child {
    border-bottom: 1px solid #e5e5e5;
  }
`;

const TableCell = styled.td`
  border: 0;
  padding: 0.45rem;
`;

const Table = ({ headers, data }) => {
  return (
    <TableWrapper>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <TableHeader key={index}>{header}</TableHeader>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <TableCell key={cellIndex}>{cell}</TableCell>
            ))}
          </TableRow>
        ))}
      </tbody>
    </TableWrapper>
  );
};

export default Table;
