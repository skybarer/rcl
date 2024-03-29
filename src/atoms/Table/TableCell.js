
// TableCell.js
import React from 'react';
import styled from 'styled-components';


const TableCellStyle = styled.td`
  border: 0;
  padding: 0.45rem;
`;

const TableCell = ({ children, style }) => {
  return <TableCellStyle style={style}>{children}</TableCellStyle>;
};

export default TableCell;
