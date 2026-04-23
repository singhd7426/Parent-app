import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapDashboard = () => {
  const mapContainerStyle = {
    height: "400px",
    width: "800px"
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={{ lat: -34.397, lng: 150.644 }}
        zoom={8}
      />
    </LoadScript>
  );
};

export default MapDashboard;