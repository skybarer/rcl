import React from 'react';
import PropTypes from 'prop-types';

export default function Dropdowns({ label = 'button', backgroundColor, onClick }) {
  return (
    <button onClick={onClick} style={{ backgroundColor, border: 'none', padding: '0.7rem', borderRadius: '4px' }}>
      {label}
    </button>
  );
}

Dropdowns.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Dropdowns.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
};
