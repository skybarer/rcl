import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar({ label = 'Navbar', backgroundColor, onClick }) {
  return (
    <nav className='navbar'>
      {label}
    </nav>
  );
}

Navbar.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Navbar.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
};
