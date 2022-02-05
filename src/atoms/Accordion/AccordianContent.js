import React from 'react';
import PropTypes from 'prop-types';

const AccordionContent = ({ children }) => {
    return (
        <span className='accordion accordian-content'>
            {children}
        </span>
    )
}

AccordionContent.propTypes = {
    children: PropTypes.node.isRequired,
};

AccordionContent.defaultProps = {
    children: null,
}

export default AccordionContent;