import React, { FC, MouseEventHandler } from "react";
import styled from "styled-components";
import SymbolButton from "./button/SymbolButton";

interface FooterProps {
  onMenuClick?: MouseEventHandler<HTMLButtonElement>
}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <Container>
      <MessageButton>
        <img src="/img/icons/MessageLogo.svg" alt="메시지" />
      </MessageButton>
      <ReviewButton>
        <img src="/img/icons/ReviewLogo.svg" alt="리뷰" />
      </ReviewButton>
      <SymbolButton onClick={props.onMenuClick} />
      <HistoryButton>
        <img src="/img/icons/HistoryLogo.svg" alt="히스토리" />
      </HistoryButton>
      <MyPageButton>
        <img src="/img/icons/MyPageLogo.svg" alt="마이페이지" />
      </MyPageButton>
    </Container>
  );
};

const Container = styled.div`
  background-color: #ffd466;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 65px;
  position: relative;
`;

const MessageButton = styled.button`
  width: 40px;
  height: 30px;
  border: none;
  background-color: transparent;
`;
const ReviewButton = styled.button`
  width: 40px;
  height: 30px;
  border: none;
  background-color: transparent;
`;
const HistoryButton = styled.button`
  width: 40px;
  height: 30px;
  border: none;
  background-color: transparent;
`;
const MyPageButton = styled.button`
  width: 40px;
  height: 30px;
  border: none;
  background-color: transparent;
`;

export default Footer;
