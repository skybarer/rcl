import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BannerWrapper = styled.div`
  background-color: ${(props) => props.backgroundColor || '#007bff'};
  color: ${(props) => props.textColor || '#ffffff'};
  padding: 10px;
  text-align: center;
`;

const Banner = ({ text, backgroundColor, textColor }) => {
    return (
        <BannerWrapper backgroundColor={backgroundColor} textColor={textColor}>
            {text}
        </BannerWrapper>
    );
};

Banner.propTypes = {
    text: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
};

export default Banner;
