import React from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

export interface MyLocationMarkerProps {
  position: {
    lat: number;
    lng: number;
  };
}

export const MyPositionMarker: React.FC<MyLocationMarkerProps> = (props) => {
  return (
    <StyledMapMarker
      position={props.position}
      image={{
        src: '/img/markers/my-position.svg',
        size: {
          width: 56,
          height: 70,
        },
        options: {
          offset: { x: 28, y: 70 },
        },
      }}
    />
  );
};

const StyledMapMarker = styled(MapMarker)`
  z-index: 1000;
`;
