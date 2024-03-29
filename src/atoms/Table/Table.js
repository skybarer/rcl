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



// const Table = ({ headers, data }) => {
//   return (
//     <TableWrapper>
//       <thead>
//         <tr>
//           {headers.map((header, index) => (
//             <TableHeader key={index}>{header}</TableHeader>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((row, rowIndex) => (
//           <TableRow key={rowIndex}>
//             {row.map((cell, cellIndex) => (
//               <TableCell key={cellIndex}>{cell}</TableCell>
//             ))}
//           </TableRow>
//         ))}
//       </tbody>
//     </TableWrapper>
//   );
// };

const Table = ({ children }) => {
  return <TableWrapper>{children}</TableWrapper>;
};

export default Table;
