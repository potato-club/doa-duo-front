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
        <Logo><img src="/img/icons/Logo.svg"/></Logo>
 <p>도와듀오가 처음이신가요?</p>

 <StyledBTN to="/header/login" width={183} height={39}>기존 회원 로그인하기</StyledBTN>
 <StyledBTN to="/header/signup" width={183} height={39}>신규 회원 가입하기</StyledBTN>
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
    width:156px;
    height:156px;
    background-color: transparent;
    border-radius: 78px;
    margin-bottom: 29px;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 100%;
        height: 100%;
    }
`;

const StyledBTN = styled(Link)<StyledBTNProps>`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    border: none;
    background-color: #FFEDBB;
    display: inline-flex;
font-size: 11px;

  width: 156px;
  height: 156px;
  background-color: gray;
  border-radius: 78px;
  margin-bottom: 29px;
`;


