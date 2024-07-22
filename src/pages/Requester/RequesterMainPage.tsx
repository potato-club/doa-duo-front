import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Map } from 'react-kakao-maps-sdk';
import { Position } from '../../types';
import { useMyPositionHook } from '../../hooks/useMyPositionHook';
import { MyPositionMarker } from '../../components/map/MyPositionMarker';
import { ResetButton } from '../../components/map/ResetButton';
import { RequestForm } from '../../components/RequestForm';
import Footer from '../../components/Footer';
import SwipeableModal from '../../components/SwipeableModal';

export interface RequesterMainPageProps {}

const DefaultPosition: Position = {
  lat: 37.5665,
  lng: 126.978,
};

export const RequesterMainPage: React.FC<RequesterMainPageProps> = (props) => {
  const [center, setCenter] = useState<Position>(DefaultPosition);
  const [isFirst, setIsFirst] = useState(true);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);

  const myPosition = useMyPositionHook();

  useEffect(() => {
    if (isFirst && myPosition) {
      setCenter(myPosition);
      setIsFirst(false);
    }
  }, [isFirst, myPosition]);

  return (
    <Container>
      <SwipeableModal
        isOpen={isRequestModalOpen}
        onClose={() => setIsRequestModalOpen(false)}
        bottomOffset={65}
      >
        <RequestForm />
      </SwipeableModal>
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
        <Footer
          onMenuClick={(event) => {
            event.stopPropagation();
            setIsRequestModalOpen((prev) => !prev);
          }}
        />
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
