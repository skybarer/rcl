// Box.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyleBox = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  text-align: center;
  grid-column-end: span ${(props) => props.colSpan};
`;

const Box = ({ style, children, className }) => {
  return (
    <StyleBox className={{ ...className }} style={{ ...style }}>
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
