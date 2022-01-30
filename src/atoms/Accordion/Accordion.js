import React from 'react';
import PropTypes from 'prop-types';
import './Accordion.css'

export const Accordion = ({ title, content, backgroundColor, onClick }) => {
  return (
    <React.Fragment>
      <div className='accordion'>
        {title}
      </div>
      <div className='accordion'>
        {content}
      </div>
    </React.Fragment>
  );
}

Accordion.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Accordion.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
};
