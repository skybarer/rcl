import React from 'react';
import PropTypes from 'prop-types';

const AccordionTitle = ({ children, titileOnClick, svgShow, toogleBody }) => {
    console.log(toogleBody)
    return (
        <div
            className='accordian-title'
            onClick={titileOnClick}
            style={{
                borderBottom: (!toogleBody ? 'thin solid #ddd' : 'none'),
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

export default AccordionTitle;