import React from 'react';
import styled from 'styled-components';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

export interface ResponserMainPageProps {}

export const ResponserMainPage: React.FC<ResponserMainPageProps> = (props) => {
  return (
    <Container>
      <Map
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ width: '100%', height: '360px' }}
      >
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
          <div style={{ color: '#000' }}>Hello World!</div>
        </MapMarker>
      </Map>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
`;
