import React, { Children } from 'react';
import PropTypes from 'prop-types';
import './Dropdowns.css';

export default function Dropdowns({ children }) {
  return (
    <div className='rc-modal'>
      {children}
    </div>
  );
}

Dropdowns.propTypes = {
  // backgroundColor: PropTypes.string,
  // label: PropTypes.string.isRequired,
  // onClick: PropTypes.func,
};

Dropdowns.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
};
