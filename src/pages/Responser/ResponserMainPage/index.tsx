import React, { useState } from 'react';
import styled from 'styled-components';
import { Map } from 'react-kakao-maps-sdk';
import { MyPositionMarker } from '../../../components/map/MyPositonMarker';
import { useMyPositonHook as useMyPositionHook } from '../../../hooks/useMyPositionHook';

export interface ResponserMainPageProps {}

export const ResponserMainPage: React.FC<ResponserMainPageProps> = (props) => {
    const [center, setCenter] = useState();

  const myPosition = useMyPositionHook();

//   useEffect(() => {
//     if (myPosition) {
//       setCenter(myPosition);
//     }
//   }, [myPosition])
  

  return (
    <Container>
      <StyledMap center={{ lat: 33.5563, lng: 126.79581 }}>
        {myPosition ? <MyPositionMarker position={myPosition} /> : null}
      </StyledMap>
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
`;
