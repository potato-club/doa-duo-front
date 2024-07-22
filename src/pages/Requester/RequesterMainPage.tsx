import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Map } from 'react-kakao-maps-sdk';
import { Position } from '../../types';
import { useMyPositionHook } from '../../hooks/useMyPositionHook';
import { MyPositionMarker } from '../../components/map/MyPositionMarker';
import { ResetButton } from '../../components/map/ResetButton';
import { RequestFormSheet } from '../../components/RequestFormSheet';

export interface RequesterMainPageProps {}

const DefaultPosition: Position = {
  lat: 37.5665,
  lng: 126.978,
};

export const RequesterMainPage: React.FC<RequesterMainPageProps> = (props) => {
  const [center, setCenter] = useState<Position>(DefaultPosition);
  const [isFirst, setIsFirst] = useState(true);
  const [isEnable, setIsEnable] = useState(false);

  const myPosition = useMyPositionHook();

  useEffect(() => {
    if (isFirst && myPosition) {
      setCenter(myPosition);
      setIsFirst(false);
    }
  }, [isFirst, myPosition]);

  return (
    <Container>
      <StyledMap
        center={center}
        onDragEnd={(map: any) => {
          const center = map.getCenter();
          setCenter({ lat: center.getLat(), lng: center.getLng() });
        }}
        isPanto
      >
        {myPosition ? <MyPositionMarker position={myPosition} /> : null}
      </StyledMap>
      <Overlay>
        <ResetButton
          onClick={() => {
            setCenter(myPosition ?? DefaultPosition);
          }}
        />
        <RequestFormSheet />
      </Overlay>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledMap = styled(Map)`
  width: 100vw;
  height: 100vh;
  position: absolute;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 1000;
`;
