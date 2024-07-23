import React from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';

export interface RequestMarkerProps {
  position: {
    lat: number;
    lng: number;
  };
}

export const RequestMarker: React.FC<RequestMarkerProps> = (props) => {
  return (
    <MapMarker
      position={props.position}
      image={{
        src: '/img/markers/request.svg',
        size: {
          width: 30,
          height: 39,
        },
        options: {
          offset: { x: 15, y: 39 },
        },
      }}
    />
  );
};
