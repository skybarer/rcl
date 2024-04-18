// Grid.js
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  grid-template-rows: repeat(${(props) => props.rows}, 1fr);
  gap: ${(props) => props.gap}px;
`;

Grid.propTypes = {
  columns: PropTypes.number,
  rows: PropTypes.number,
  gap: PropTypes.number,
};

Grid.defaultProps = {
  rows: 1,
  columns: 1,
  gap: 0,
};

export default Grid;
