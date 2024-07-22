import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Map } from 'react-kakao-maps-sdk';
import { MyPositionMarker } from '../../components/map/MyPositionMarker';
import { Position } from '../../types';
import { useMyPositionHook } from '../../hooks/useMyPositionHook';
import { RequestCard } from '../../components/RequestCard';
import { ResetButton } from '../../components/map/ResetButton';

export interface RespondentMainPageProps {}

const DefaultPosition: Position = {
  lat: 37.5665,
  lng: 126.978,
};

export const RespondentMainPage: React.FC<RespondentMainPageProps> = (props) => {
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
      {!isEnable ? <BlueOverlay /> : null}
      <Overlay>
        <ResetButton
          onClick={() => {
            setCenter(myPosition ?? DefaultPosition);
          }}
        />
        <ResetButton
          onClick={() => {
            setIsEnable(!isEnable);
          }}
        />
        <RequestCard
          name="홍길동"
          info="저는 다리가 불편합니다"
          address="경기도 파주시 탄현면"
          content="휠체어에 태워 주셨으면 합니다"
          onReject={() => {}} // 비워둠
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

const BlueOverlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 500;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  padding: 20px;
  z-index: 1000;
`;
