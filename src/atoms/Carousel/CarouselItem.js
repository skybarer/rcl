import React from 'react';
import PropTypes from 'prop-types';
import './Carousel.css'

export const CarouselItem = ({ children, width }) => {
    return (
        <div className='carousel-item' style={{ width: width }}>
            {children}
        </div>
    );
};

CarouselItem.propTypes = {
    width: PropTypes.string
};
CarouselItem.defaultProps = {};


