// Box.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyleBox = styled.div`
  display: flex;
  border: 1px solid #ddd;
  padding: 20px;
  text-align: center;
  grid-column-end: span ${(props) => props.colSpan};
`;

const Box = ({ style, children, className, colSpan }) => {
  return (
    <StyleBox
      className={{ ...className }}
      style={{ ...style }}
      colSpan={colSpan}
    >
      {children}
    </StyleBox>
  );
};

Box.propTypes = {
  colSpan: PropTypes.number,
};

Box.defaultProps = {
  colSpan: 1,
};

export default Box;
