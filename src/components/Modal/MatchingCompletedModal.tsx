import React from "react";
import styled from "styled-components";

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
        <h2>도와듀오 매칭완료!</h2>
        <p>{username}님이 오고있어요!</p>
      </MatchResultMessage>
    </MatchingCompletedModalContainer>
  );
};

const MatchingCompletedModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 265px;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  border: 0px solid gray;
  padding: 10px 0 10px 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
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
  font-family: "MyFont", sans-serif;
`;

export default MatchingCompletedModal;
