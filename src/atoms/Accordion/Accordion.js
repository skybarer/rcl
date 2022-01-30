import React from 'react';
import PropTypes from 'prop-types';
import './Accordion.css'

export const Accordion = ({ title, content, backgroundColor, onClick }) => {

  const [toogleBody, setToggleBody] = React.useState(false)

  const titleOnClikc = () => {
    setToggleBody(!toogleBody);
  }

  return (
    <React.Fragment>
      <div className='accordion accordian-header' onClick={titleOnClikc}>
        {title}
      </div>
      {
        toogleBody ?
          <div className='accordion'>
            {content}
          </div>
          :
          null
      }
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
