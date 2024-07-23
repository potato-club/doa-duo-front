import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Map } from 'react-kakao-maps-sdk';
import { MyPositionMarker } from '../../components/map/MyPositionMarker';
import { Position } from '../../types';
import { useMyPositionHook } from '../../hooks/useMyPositionHook';
import { RequestCard } from '../../components/RequestCard';
import { ResetButton } from '../../components/map/ResetButton';
import Footer from '../../components/Footer';
import { MenuModal } from '../../components/MenuModal';
import CardContainer from '../../components/CardContainer';

export interface RespondentMainPageProps {}

const DefaultPosition: Position = {
  lat: 37.5665,
  lng: 126.978,
};

export const RespondentMainPage: React.FC<RespondentMainPageProps> = (
  props
) => {
  const [center, setCenter] = useState<Position>(DefaultPosition);
  const [isFirst, setIsFirst] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <ResetButtonWrapper>
        <ResetButton
          onClick={() => {
            setCenter(myPosition ?? DefaultPosition);
          }}
        />
      </ResetButtonWrapper>
      <RequestWrapper>
        <CardContainer />
      </RequestWrapper>
      <Overlay>
        <Footer
          onMenuClick={() => {
            setIsMenuOpen((prev) => !prev);
          }}
        />
      </Overlay>
      <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
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

const RequestWrapper = styled.div`
  position: absolute;
  bottom: 0;
  padding: 20px;
  z-index: 1000;
`;

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 1000;
`;

const ResetButtonWrapper = styled.div`
  position: absolute;
  left: 27px;
  bottom: 140px;
  z-index: 500;
`;
