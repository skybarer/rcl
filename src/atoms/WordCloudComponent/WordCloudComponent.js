// WordCloudComponent.js
import React, { useEffect, useState } from 'react';

const WordCloudComponent = ({ words }) => {
  // Sample words data

  // State for storing the positions of words
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    // Function to generate random positions and sizes
    const generatePositions = () => {
      const width = 800;
      const height = 400;
      return words.map((word) => ({
        ...word,
        x: Math.random() * (width - 50) + 25, // Random x position with padding
        y: Math.random() * (height - 50) + 25, // Random y position with padding
        size: word.value, // Control size based on word value
      }));
    };

    // Set the generated positions once when the component mounts
    setPositions(generatePositions());
  }, [words]); // Empty dependency array ensures this runs only once

  return (
    <svg width="800" height="400" style={{ border: '1px solid #ddd' }}>
      {positions.map((word, index) => (
        <text
          key={index}
          x={word.x}
          y={word.y}
          fontSize={`${word.size}px`}
          fill={word.color}
          textAnchor="middle"
        >
          {word.text}
        </text>
      ))}
    </svg>
  );
};

export default WordCloudComponent;
