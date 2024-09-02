// LazyImage.js
import React, { useState } from 'react';

const LazyImage = ({ src, alt, ...props }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      onLoad={() => setLoaded(true)}
      style={{ display: loaded ? 'block' : 'none' }}
      {...props}
    />
  );
};

export default LazyImage;
