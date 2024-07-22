import React from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';

export interface MyLocationMarkerProps {
  position: {
    lat: number;
    lng: number;
  };
}

export const MyPositionMarker: React.FC<MyLocationMarkerProps> = (props) => {
  return (
    <MapMarker
      position={props.position}
      image={{
        src: '/img/markers/my-position.svg',
        size: {
          width: 56,
          height: 55,
        },
        options: {
          offset: { x: 28, y: 55 },
        },
      }}
    />
  );
};
