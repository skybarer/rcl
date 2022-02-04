import React from 'react';
import PropTypes from 'prop-types';
import './List.css';
import { ListItem } from './ListItem';

export default function List({ style, ...props }) {

  return (
    <ul
      className='rc-list'
      style={{...style}}>
      <ListItem {...props} />
    </ul>
  );
}

List.propTypes = {
  backgroundColor: PropTypes.string,
};

List.defaultProps = {
  backgroundColor: null,
};







