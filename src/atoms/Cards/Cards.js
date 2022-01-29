import React from 'react';
import PropTypes from 'prop-types';

export default function Cards({ label = 'button', backgroundColor, onClick }) {
  return (
    <button onClick={onClick} style={{ backgroundColor, border: 'none', padding: '0.7rem', borderRadius: '4px' }}>
      {label}
    </button>
  );
}

Cards.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Cards.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
};
