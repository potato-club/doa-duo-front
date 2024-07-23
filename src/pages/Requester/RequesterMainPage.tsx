import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Map } from 'react-kakao-maps-sdk';
import { Position } from '../../types';
import { useMyPositionHook } from '../../hooks/useMyPositionHook';
import { MyPositionMarker } from '../../components/map/MyPositionMarker';
import { ResetButton } from '../../components/map/ResetButton';
import { RequestForm } from '../../components/RequestForm';
import Footer from '../../components/Footer';
import { MenuModal } from '../../components/MenuModal';
import { SwipeableModal } from '../../components/SwipeableModal';
import MatchingCompletedModal from '../../components/Modal/MatchingCompletedModal';
import axios from 'axios';

export interface RequesterMainPageProps {}

const DefaultPosition: Position = {
  lat: 37.5665,
  lng: 126.978,
};

const enum Status {
  None,
  Request,
  Pending,
  Waiting,
}

export const RequesterMainPage: React.FC<RequesterMainPageProps> = (props) => {
  const [status, setStatus] = useState(Status.None);
  const [center, setCenter] = useState<Position>(DefaultPosition);
  const [requestPosition, setRequestPosition] =
    useState<Position>(DefaultPosition);
  const [isFirst, setIsFirst] = useState(true);
  const [address, setAddress] = useState('');
  const [matchingKey, setMatchingKey] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [respondent, setRespondent] = useState();

  const myPosition = useMyPositionHook();

  const geocoder = useRef(new kakao.maps.services.Geocoder());

  useEffect(() => {
    if (isFirst && myPosition) {
      setCenter(myPosition);
      setIsFirst(false);
    }
  }, [isFirst, myPosition]);

  useEffect(() => {
    geocoder.current.coord2Address(center.lng, center.lat, (result) => {
      if (result.length === 0) {
        return;
      }

      setAddress(
        result[0].road_address?.address_name ?? result[0].address.address_name
      );
    });
  }, [address, center.lat, center.lng]);

  useEffect(() => {
    if (status === Status.Pending) {
      const interval = setInterval(async () => {
        try {
          const res = await axios.get(
            `http://15.164.154.44:8081/api/util/status/${matchingKey}`
          );

          if (res.data.acceptState) {
            console.log(res.data);
          }
        } catch (error) {
          console.log(error);
        }
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [matchingKey, status]);

  return (
    <Container>
      {status === Status.None || status === Status.Request ? (
        <SwipeableModal
          isOpen={status === Status.Request}
          onOpen={() => setStatus(Status.Request)}
          onClose={() => setStatus(Status.None)}
          bottomOffset={65}
        >
          <RequestForm
            currentAddress={address}
            onSubmit={async (data) => {
              try {
                const res = await axios.post(
                  'http://15.164.154.44:8081/api/util/request',
                  {
                    latitude: center.lat,
                    longitude: center.lng,
                    address: `${address} ${data.detailAddress}`,
                    quickMessage: data.quickMessage,
                  },
                  {
                    headers: {
                      AT: localStorage.getItem('At')?.split(' ')[1],
                    },
                  }
                );

                setMatchingKey(res.data);
                setRequestPosition(center);
                setStatus(Status.Pending);
              } catch (error) {
                console.log(error);
              }
            }}
          />
        </SwipeableModal>
      ) : null}
      {status === Status.Pending ? (
        <Backdrop>
          10분 거리 내에서
          <br />
          요청 중입니다...
        </Backdrop>
      ) : null}
      {/* <CompleteWrapper>
        <MatchingCompletedModal username="안호빈" />
      </CompleteWrapper> */}
      <StyledMap
        center={center}
        onDragEnd={(map: any) => {
          const center = map.getCenter();
          setCenter({ lat: center.getLat(), lng: center.getLng() });
        }}
        isPanto
      >
        {myPosition ? (
          <MyPositionMarker
            position={(() => {
              switch (status) {
                case Status.None:
                  return myPosition;
                case Status.Request:
                  return center;
                case Status.Pending:
                case Status.Waiting:
                  return requestPosition;
              }
            })()}
          />
        ) : null}
      </StyledMap>
      <ResetButtonWrapper>
        <ResetButton
          onClick={() => {
            setCenter(myPosition ?? DefaultPosition);
          }}
        />
      </ResetButtonWrapper>
      <Overlay>
        {status === Status.Pending ? (
          <CancelButton onClick={() => setStatus(Status.None)}>
            취소하기
          </CancelButton>
        ) : null}
        {status !== Status.Pending ? (
          <Footer
            onMenuClick={() => {
              setIsMenuOpen((prev) => !prev);
            }}
          />
        ) : null}
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

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 1000;
`;

const CancelButton = styled.button`
  width: 194px;
  margin-bottom: 71px;
  display: flex;
  padding: 16px 0px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 50px;
  border: 2px solid var(--color-gray-300);
  background: rgba(255, 255, 255, 0.8);
  color: var(--color-gray-400);
  text-align: center;
  font-family: LotteMartDream;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 87.5% */
`;

const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 600;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(16px);
  color: var(--color-gray-700);
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

const CompleteWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 56px;
  z-index: 1000;
`;

const ResetButtonWrapper = styled.div`
  position: absolute;
  left: 27px;
  bottom: 140px;
  z-index: 500;
`;
