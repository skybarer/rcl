import React from 'react';
import PropTypes from 'prop-types';
import css from '../../electrons/accordian.module.css';

const AccordionContent = ({ children }) => {
    return (
        <div className={css.accordianContent}>
            {children}
        </div>
    )
}

AccordionContent.propTypes = {
    children: PropTypes.node.isRequired,
};

AccordionContent.defaultProps = {
    children: null,
}

export default AccordionContent;