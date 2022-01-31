import React from 'react';
import PropTypes from 'prop-types';
import './Cards.css'

export default function Cards({ content }) {
  return (
    <div className='rcl-card'>
      {content}
    </div>
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
