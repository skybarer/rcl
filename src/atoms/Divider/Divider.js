import React from 'react';
import PropTypes from 'prop-types';
import './Divider.css';

const Divider = ({ children, style }) => {
  if (!children) return <hr style={{ ...style }}></hr>;
  return (
    <div className="container">
      <div className="border" />
      <span className="content" style={{ ...style }} >
        {children}
      </span>
      <div className="border" />
    </div>
  );
}

Divider.propTypes = {
  children: PropTypes.object
};
Divider.defaultProps = {};

export default Divider;
