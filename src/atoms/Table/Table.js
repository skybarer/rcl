import React from 'react';
import PropTypes from 'prop-types';

export default function Table({ label = 'button', backgroundColor, onClick }) {
  return (
    <button onClick={onClick} style={{ backgroundColor, border: 'none', padding: '0.7rem', borderRadius: '4px' }}>
      {label}
    </button>
  );
}

Table.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Table.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
};
