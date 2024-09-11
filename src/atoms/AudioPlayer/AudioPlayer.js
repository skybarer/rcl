// src/components/AudioPlayer.js
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled components for the audio player
const PlayerWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: 20px;
  background-color: #f78da7;
  width: 400px;
  gap: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ImageWrapper = styled.div`
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const PlayButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;

  &:focus {
    outline: none;
  }
`;

const InfoWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: #fff;
`;

const Title = styled.h4`
  font-size: 16px;
  margin: 0;
  font-weight: bold;
`;

const Subtitle = styled.p`
  font-size: 12px;
  margin: 0;
  color: rgba(255, 255, 255, 0.8);
`;

const DurationWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
`;

const IconWrapper = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

const MoreButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #fff;
  margin-left: 8px;

  &:focus {
    outline: none;
  }
`;

const AudioPlayer = ({ src, title, artist, duration, cover }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <PlayerWrapper>
      <ImageWrapper>
        <img
          src={cover}
          alt="cover"
          style={{ width: '100%', height: '100%' }}
        />
      </ImageWrapper>
      <InfoWrapper>
        <Title>{title}</Title>
        <Subtitle>by {artist}</Subtitle>
        <DurationWrapper>
          <IconWrapper>
            {/* Clock Icon SVG */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22ZM12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4ZM13 7H11V13H16V11H13V7Z"
                fill="#fff"
              />
            </svg>
          </IconWrapper>
          {duration}
        </DurationWrapper>
      </InfoWrapper>
      <PlayButton onClick={togglePlay}>
        {/* Play/Pause Icon SVG */}
        {isPlaying ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 19H10V5H6V19ZM14 5V19H18V5H14Z" fill="#fff" />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 5V19L19 12L8 5Z" fill="#fff" />
          </svg>
        )}
      </PlayButton>
      <MoreButton>
        {/* Ellipsis Icon SVG */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 8C10.9 8 10 8.9 10 10C10 11.1 10.9 12 12 12C13.1 12 14 11.1 14 10C14 8.9 13.1 8 12 8ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16ZM12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4Z"
            fill="#fff"
          />
        </svg>
      </MoreButton>
      <audio ref={audioRef} src={src} />
    </PlayerWrapper>
  );
};

AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  artist: PropTypes.string,
  duration: PropTypes.string,
  cover: PropTypes.string,
};

AudioPlayer.defaultProps = {
  title: 'Unknown Title',
  artist: 'Unknown Artist',
  duration: '0:00',
  cover: '', // Default to no cover image
};

export default AudioPlayer;
