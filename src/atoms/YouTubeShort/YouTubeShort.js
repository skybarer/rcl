// src/components/YouTubeShort.js
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const VideoWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  height: 720px;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  background-color: black;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h3`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
`;

const YouTubeShort = ({ videoSrc, title }) => {
  return (
    <VideoWrapper>
      <Video src={videoSrc} autoPlay loop muted />
      <Title>{title}</Title>
    </VideoWrapper>
  );
};

YouTubeShort.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  title: PropTypes.string,
};

YouTubeShort.defaultProps = {
  title: 'Your Title Here',
};

export default YouTubeShort;
