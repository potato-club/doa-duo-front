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
import axios from 'axios';
import MatchingCompletedModal from '../../components/Modal/MatchingCompletedModal';

export interface RespondentMainPageProps {}

const DefaultPosition: Position = {
  lat: 37.5665,
  lng: 126.978,
};

type RequestData = {
  id: number;
  requesterName: string;
  currentAddress: string;
  quickMessage: string;
  latitude: number;
  longitude: number;
};

const enum Status {
  None,
  Waiting,
}

export const RespondentMainPage: React.FC<RespondentMainPageProps> = (
  props
) => {
  const [status, setStatus] = useState(Status.None);
  const [center, setCenter] = useState<Position>(DefaultPosition);
  const [isFirst, setIsFirst] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [requests, setRequests] = useState<RequestData[]>([]);
  const [blackRequests, setBlackRequests] = useState<RequestData[]>([]);
  const [requester, setRequester] = useState<RequestData>();

  const myPosition = useMyPositionHook();

  useEffect(() => {
    if (isFirst && myPosition) {
      setCenter(myPosition);
      setIsFirst(false);
    }
  }, [isFirst, myPosition]);

  useEffect(() => {
    if (status === Status.None) {
      const interval = setInterval(async () => {
        try {
          const res = await axios.get(
            `http://15.164.154.44:8081/api/util/unaccepted`,
            {
              headers: {
                AT: localStorage.getItem('At')?.split(' ')[1],
              },
            }
          );

          if (res.data) {
            setRequests((value) => {
              return value.concat(
                ...(res.data as RequestData[]).filter(
                  (v) =>
                    requests.findIndex((r) => r.id === v.id) === -1 &&
                    blackRequests.findIndex((r) => r.id === v.id) === -1
                )
              );
            });
          }
        } catch (error) {
          console.log(error);
        }
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [blackRequests, requests, status]);

  return (
    <Container>
      {status === Status.Waiting && requester && (
        <CompleteWrapper>
          <MatchingCompletedModal onClick={() => setStatus(Status.None)} username={`${requester.requesterName}님에게\n가고 있습니다.`} />
        </CompleteWrapper>
      )}
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
      {status === Status.None && (
        <RequestWrapper>
          {requests.map((request) => (
            <RequestCard
              key={request.id}
              id={request.id}
              name={request.requesterName}
              address={request.currentAddress}
              content={request.quickMessage}
              onAccept={async () => {
                try {
                  const res = await axios.post(
                    `http://15.164.154.44:8081/api/util/accept/${request.id}`,
                    null,
                    {
                      headers: {
                        AT: localStorage.getItem('At')?.split(' ')[1],
                      },
                    }
                  );

                  if (res.data) {
                    setRequester(request);
                    setStatus(Status.Waiting);
                    setBlackRequests((value) => value.concat(request));
                  }
                } catch (error) {
                  console.log(error);
                }
              }}
              onReject={() => {
                setBlackRequests((value) => value.concat(request));
                setRequests((value) =>
                  value.filter((v) => v.id !== request.id)
                );
              }}
            />
          ))}
        </RequestWrapper>
      )}
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
  box-sizing: border-box;
  position: absolute;
  width: 100vw;
  display: flex;
  margin-bottom: 120px;
  padding-left: 20px;
  z-index: 1000;
  bottom: 0;
  gap: 16px;
  overflow-x: auto;
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

const CompleteWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  padding-top: 56px;
  z-index: 1000;
  width: 100%;
`;
