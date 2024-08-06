import React, { useState } from 'react';

const DragAndDropExample = () => {
  const [dragMessage, setDragMessage] = useState('Drag the box');
  const [dropMessage, setDropMessage] = useState('Drop zone');

  const handleDragStart = (event) => {
    event.dataTransfer.setData('text/plain', 'Drag data');
    setDragMessage('Dragging started');
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragMessage('Dragging over drop zone');
  };

  const handleDragLeave = (event) => {
    setDragMessage('Drag the box');
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    setDropMessage(`Dropped: ${data}`);
    setDragMessage('Drag the box');
  };

  return (
    <div>
      <div
        draggable
        onDragStart={handleDragStart}
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'lightblue',
          marginBottom: '20px',
          cursor: 'grab',
        }}
      >
        {dragMessage}
      </div>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: 'lightgray',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {dropMessage}
      </div>
    </div>
  );
};

export default DragAndDropExample;
