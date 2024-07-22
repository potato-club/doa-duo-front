import React from 'react';
import styled from 'styled-components';

interface MatchingCompletedModalProps {
  username: string;
}

const MatchingCompletedModal: React.FC<MatchingCompletedModalProps> = ({
  username,
}) => {
  return (
    <MatchingCompletedModalContainer>
      <ProfileImg></ProfileImg>
      <MatchResultMessage>
        <Title>도와듀오 매칭완료!</Title>
        <SubTitle>
          {username}님이
          <br />
          오고 있습니다.
        </SubTitle>
      </MatchResultMessage>
      <ButtonWrapper>
        <CancelButton>취소할래요</CancelButton>
        <ArriveButton>도착했어요</ArriveButton>
      </ButtonWrapper>
    </MatchingCompletedModalContainer>
  );
};

const MatchingCompletedModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 330px;
  height: min-content;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  border: 0px solid gray;
  padding: 30px 0 0 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  gap: 19px;
`;

const ProfileImg = styled.div`
  display: flex;
  width: 123px;
  height: 123px;
  border-radius: 50%;
  background-color: lightgray;
  justify-content: center;
  align-items: center;
`;

const MatchResultMessage = styled.p`
  margin: 0px;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 18px;
  color: black;
  font-family: 'MediumFont', sans-serif;
  gap: 19px;
`;

const Title = styled.span`
  font-family: LotteMartHappy;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const SubTitle = styled.span`
  color: #818181;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ButtonWrapper = styled.div`
  margin-top: 11px;
  display: flex;
`;

const CancelButton = styled.button`
  width: 165px;
  height: 57px;
  border-radius: 0px 0px 0px 25px;
  background: var(--color-gray-100);
  color: var(--color-gray-400);
  text-align: center;
  font-family: LotteMartHappy;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
`;

const ArriveButton = styled.button`
  width: 165px;
  height: 57px;
  border-radius: 0px 0px 25px 0px;
  background: var(--color-secondary);
  color: #fff;
  text-align: center;
  font-family: LotteMartHappy;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
`;

export default MatchingCompletedModal;
