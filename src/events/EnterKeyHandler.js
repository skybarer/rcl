import React, { useState } from 'react';
import styled from 'styled-components';

const InputBox = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const EnterKeyHandler = () => {
  const [message, setMessage] = useState('');

  const handleEnterPress = (event) => {
    if (event.key === 'Enter') {
      setMessage(`Enter pressed! Current input: ${event.target.value}`);
    }
  };

  return (
    <div>
      <InputBox
        type="text"
        onKeyDown={handleEnterPress}
        placeholder="Type and press Enter"
      />
      <p>{message}</p>
    </div>
  );
};

export default EnterKeyHandler;
