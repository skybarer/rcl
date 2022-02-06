import React from 'react';
import PropTypes from 'prop-types';
import css from '../../electrons/accordian.module.css';

const AccordionContent = ({ children }) => {
    return (
        <span className={css.AccordionContent}>
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