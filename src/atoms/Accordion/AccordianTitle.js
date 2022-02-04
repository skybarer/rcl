import React from 'react';
import PropTypes from 'prop-types';

export const AccordionTitle = ({ children, titileOnClick, svgShow, toogleBody }) => {
    console.log(toogleBody)
    return (
        <div
            className='accordian-title'
            onClick={titileOnClick}
            style={{
                borderBottom: (!toogleBody ? 'thin dashed' : 'none'),
            }}>
            <span>{children}</span>
            <span className="open">
                {svgShow}
            </span>
        </div>
    )
}

AccordionTitle.propTypes = {
    toogleIcon: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

AccordionTitle.defaultProps = {
    toogleIcon: false,
}