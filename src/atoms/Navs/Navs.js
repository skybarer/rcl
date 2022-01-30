import React from 'react';
import PropTypes from 'prop-types';

export default function Navs({ label = 'Navbar', backgroundColor, onClick }) {
  return (
    <nav className='navbar'>
      {label}
    </nav>
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
