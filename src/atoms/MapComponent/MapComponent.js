// src/components/MapComponent.jsx
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled component for the Map container
const MapWrapper = styled.div`
  height: ${({ height }) => height || '400px'};
  width: ${({ width }) => width || '100%'};
  border: 2px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
`;

const MapComponent = ({ apiKey, center, zoom, markers, height, width }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Function to load the Google Maps script
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        // Initialize the map once the script is loaded
        const map = new window.google.maps.Map(mapRef.current, {
          center,
          zoom,
        });

        // Add markers to the map
        markers.forEach((marker) => {
          new window.google.maps.Marker({
            position: marker.position,
            map,
            label: marker.label,
          });
        });
      };
    };

    // Load the script only if Google Maps is not already loaded
    if (!window.google) {
      loadGoogleMapsScript();
    } else {
      // Initialize the map directly if the script is already loaded
      const map = new window.google.maps.Map(mapRef.current, {
        center,
        zoom,
      });

      markers.forEach((marker) => {
        new window.google.maps.Marker({
          position: marker.position,
          map,
          label: marker.label,
        });
      });
    }
  }, [apiKey, center, zoom, markers]);

  return <MapWrapper ref={mapRef} height={height} width={width} />;
};

// Define PropTypes for the component
MapComponent.propTypes = {
  apiKey: PropTypes.string.isRequired,
  center: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
  zoom: PropTypes.number,
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      position: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired,
      }).isRequired,
      label: PropTypes.string,
    }),
  ),
  height: PropTypes.string,
  width: PropTypes.string,
};

// Default props for the component
MapComponent.defaultProps = {
  zoom: 10,
  markers: [],
  height: '400px',
  width: '100%',
};

export default MapComponent;
