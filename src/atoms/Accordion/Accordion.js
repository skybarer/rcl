import React from 'react';
import PropTypes from 'prop-types';
import './Accordion.css'
import AccordionItem from './AccordianItem';

const Accordion = (props) => {
  const { children } = props;
  return (
    <div className='accordian'>
      {React.Children.map(children, (child, index) => <AccordionItem  {...child.props} />)}
    </div>
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

export default Accordion;
