import React from "react";
import styled from "styled-components";

export interface RequestCardProps {
  name: string;
  info: string;
  address: string;
  content: string;
  onReject: () => void;
}

export const RequestCard: React.FC<RequestCardProps> = (props) => {
  return (
    <Container>
      <Profile>
        <ProfileImage />
        <ProfileData>
          <NameData>{props.name}님</NameData>
          <InfoData>{props.info}</InfoData>
          <AddressData>{props.address}</AddressData>
        </ProfileData>
      </Profile>
      <ContentData>{props.content}</ContentData>
      <ButtonWrapper>
        <YesButton
          onClick={() => {
            console.log("수락");
          }}
        >
          수락
        </YesButton>
        <NoButton
          title="거절"
          onClick={props.onReject}
        >
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
  width: 330px;
  padding: 20px;
  border-radius: 16px;
  height: 241px;
  justify-content: space-between;
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
  font-family: "BoldFont";
  font-size: 16px;
`;

const InfoData = styled.p`
  font-family: "MediumFont";
  font-size: 12px;
`;

const AddressData = styled.p`
  font-family: "LightFont";
  font-size: 10px;
`;

const ContentData = styled.p`
  font-family: "MediumFont";
  font-size: 16px;
`;

const YesButton = styled.button`
  font-family: "BoldFont";
  font-size: 20px;
  color: #ff8800;
  width: 165px;
  border: none;
  border-right: 1px solid #d9d9d9;
  background-color: white;
  transition: background-color 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;

const NoButton = styled.button`
  font-family: "BoldFont";
  font-size: 20px;
  color: #9d9d9d;
  width: 165px;
  border: none;
  background-color: white;
  border-left: 1px solid #d9d9d9;
  transition: background-color 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;
