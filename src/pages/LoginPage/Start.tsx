import React, { useState, useEffect, ChangeEvent } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useWindowSize from "../../components/UsewindowSize";

interface LoginContainerProps {
  width: number;
  height: number;
}

interface StyledBTNProps {
  width: number;
  height: number;
}

const Start: React.FC = () => {
  const { width, height } = useWindowSize();

  return (
    <LoginContainer width={width} height={height}>
      <Logo></Logo>
      <p>도와듀오가 처음이신가요?</p>

      <StyledBTN to="/login" width={183} height={39}>
        기존 회원 로그인하기
      </StyledBTN>
      <StyledBTN to="/signup" width={121} height={39}>
        회원가입하기
      </StyledBTN>
    </LoginContainer>
  );
};

export default Start;

const LoginContainer = styled.div<LoginContainerProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  align-items: center;
  justify-content: center;
  background: linear-gradient(192deg, #f80 0.12%, #ffd769 99.88%);

  p {
    color: #fff;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 67.5px;
  }
`;

const Logo = styled.div`
  width: 156px;
  height: 156px;
  background-color: gray;
  border-radius: 78px;
  margin-bottom: 29px;
`;

const StyledBTN = styled(Link)<StyledBTNProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  font-family: "MediumFont2";
  border: none;
  background-color: #e0e0e0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: inherit;
  margin-bottom: 7.5px;
`;
