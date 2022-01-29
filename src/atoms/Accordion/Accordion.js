import React from 'react';
import PropTypes from 'prop-types';

export const Accordion = ({ title, content, backgroundColor, onClick }) => {
  return (
    <React.Fragment>
      <div>
        {title}
      </div>
      <div>
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
