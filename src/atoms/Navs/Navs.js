import React from 'react';
import PropTypes from 'prop-types';

export default function Navs({ label = 'button', backgroundColor, onClick }) {
  return (
    <button onClick={onClick} style={{ backgroundColor, border: 'none', padding: '0.7rem', borderRadius: '4px' }}>
      {label}
    </button>
  );
}

Navs.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Navs.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
};
