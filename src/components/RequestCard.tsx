import React from 'react';
import styled from 'styled-components';

export interface RequestCardProps {
  id: number;
  name: string;
  address: string;
  content: string;
  onAccept: () => void;
  onReject: () => void;
}

export const RequestCard: React.FC<RequestCardProps> = (props) => {
  return (
    <Container>
      <Profile>
        <ProfileImage />
        <ProfileData>
          <NameData>{props.name}님</NameData>
          <AddressData>{props.address}</AddressData>
        </ProfileData>
      </Profile>
      <ContentData>{props.content}</ContentData>
      <ButtonWrapper>
        <YesButton
          onClick={props.onAccept}
        >
          수락
        </YesButton>
        <NoButton title="거절" onClick={props.onReject}>
          거절
        </NoButton>
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
  padding: 20px;
  border-radius: 16px;
  gap: 16px;
  box-sizing: border-box;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
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
  align-items: baseline;
`;

const NameData = styled.p`
  color: #ffd769;
  font-family: LotteMartHappy;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const AddressData = styled.p`
  color: #7b7b7b;
  text-align: center;
  font-family: LotteMartDream;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ContentData = styled.p`
  color: #555;
  font-family: LotteMartDream;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const YesButton = styled.button`
  font-family: 'LotteMartHappy';
  font-size: 20px;
  color: #ff8800;
  width: 128px;
  border: none;
  border-right: 1px solid #d9d9d9;
  background-color: white;
  transition: background-color 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;

const NoButton = styled.button`
  font-family: 'LotteMartHappy';
  font-size: 20px;
  color: #9d9d9d;
  width: 128px;
  border: none;
  background-color: white;
  border-left: 1px solid #d9d9d9;
  transition: background-color 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;
