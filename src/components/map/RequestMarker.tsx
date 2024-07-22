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
          width: 12,
          height: 13,
        },
        options: {
          offset: { x: 6, y: 13 },
        },
      }}
    />
  );
};
