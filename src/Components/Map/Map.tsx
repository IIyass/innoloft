import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Location } from 'types';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const apiKey = process.env.REACT_APP_NOT_GA_MAP || '';

interface IMap {
  location: Location;
}
const Map = ({ location }: IMap) => {
  const center = {
    lat: parseFloat(location.latitude),
    lng: parseFloat(location.longitude),
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full object-cover">
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
