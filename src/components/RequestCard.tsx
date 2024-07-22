import React from 'react';
import styled from 'styled-components';

export interface RequestCardProps {
  name: string;
  info: string;
  address: string;
  content: string;
}

export const RequestCard: React.FC<RequestCardProps> = (props) => {
  return (
    <Container>
      <Profile>
        <ProfileImage />
        <ProfileData>
          <p>{props.name}님</p>
          <p>{props.info}</p>
          <p>{props.address}</p>
        </ProfileData>
      </Profile>
      <p>{props.content}</p>
      <ButtonWrapper>
        <button
          onClick={() => {
            console.log('수락');
          }}
        >
          수락
        </button>
        <button
          title="거절"
          onClick={() => {
            console.log('거절');
          }}
        >
          거절
        </button>
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100vw - 80px);
  padding: 20px;
  border-radius: 16px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: gray;
`;

const ProfileData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  p {
    margin: 0;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
