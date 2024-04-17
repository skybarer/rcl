// Box.js
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Box = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  text-align: center;
  grid-column-end: span ${(props) => props.colSpan};
`;

Box.propTypes = {
  colSpan: PropTypes.number,
};

Box.defaultProps = {
  colSpan: 1,
};

export default Box;
