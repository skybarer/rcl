import React from 'react';
import PropTypes from 'prop-types';
import './Spinners.css'

export default function Spinners({ label = 'button', backgroundColor, onClick }) {
  return (
    <div className="page-overlay active">
      <div className="rcl-loader"></div>
    </div>
  );
}

Spinners.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Spinners.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
};
