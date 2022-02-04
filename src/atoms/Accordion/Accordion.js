import React from 'react';
import PropTypes from 'prop-types';
import './Accordion.css'

export const Accordion = (props) => {
  const { title, content } = props;

  const [toogleBody, setToggleBody] = React.useState(false)

  const titleOnClikc = () => {
    setToggleBody(!toogleBody);
  }

  return (
    <React.Fragment>
      <div
        className='accordion accordian-header'
        onClick={titleOnClikc}
      >
        <sapan> {title}</sapan>
        <span className="open">
          {toogleBody && <svg fill="none" height="9" viewBox="0 0 14 9" width="14" xmlns="http://www.w3.org/2000/svg">
            <path d="m1 1 6 6 6-6" stroke="#000" stroke-width="2"></path>
          </svg>}
          {!toogleBody && <svg fill="none" height="14" viewBox="0 0 9 14" width="9" xmlns="http://www.w3.org/2000/svg">
            <path d="m1 13 6-6-6-6" stroke="#000" stroke-width="2"></path>
          </svg>}
        </span>
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
  title: PropTypes.string,
  content: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['small', 'medium', 'large']),
};

Accordion.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
};
