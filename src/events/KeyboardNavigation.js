import React, { useState } from 'react';
import styled from 'styled-components';

// Styled container for displaying information
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Arial, sans-serif;
  color: #333;
`;

const InfoBox = styled.div`
  margin: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  width: 300px;
  text-align: center;
`;

const Message = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Counter = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
`;

const KeyboardNavigation = () => {
  const [keyPressed, setKeyPressed] = useState('');
  const [counter, setCounter] = useState(0);

  // Function to handle key down events
  const handleKeyDown = (event) => {
    const { key } = event;
    setKeyPressed(key);

    switch (key) {
      case 'ArrowUp':
        setCounter((prevCounter) => prevCounter + 1);
        break;
      case 'ArrowDown':
        setCounter((prevCounter) => prevCounter - 1);
        break;
      case 'Enter':
        alert('Enter key pressed!');
        break;
      default:
        break;
    }
  };

  // Adding event listener when the component mounts
  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Container>
      <InfoBox>
        <Message>Press the arrow keys or Enter key:</Message>
        <Message>Current Key Pressed: {keyPressed}</Message>
        <Counter>Counter: {counter}</Counter>
      </InfoBox>
    </Container>
  );
};

export default KeyboardNavigation;
