import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface HeaderProps {
  backgroundcolor: string;
}

const Header: React.FC<HeaderProps> = ({ backgroundcolor }) => {
  return (
    <HeaderComponent backgroundcolor={backgroundcolor}>
      <Link to="/">
        <LogoComponent>
          <img
            src="/img/HeaderLogo/Header.svg"
            alt="헤더로고"
            style={{ width: "100%", height: "100%" }}
          />
        </LogoComponent>
      </Link>
    </HeaderComponent>
  );
};

const HeaderComponent = styled.div<HeaderProps>`
  width: 100%;
  height: 56px;
  background-color: ${props => props.backgroundcolor}; /* 수정: 문자열 리터럴 사용 */
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0;
  margin: 0;
`;

const LogoComponent = styled.button`
  width: 92px;
  height: 17px;
  display: flex;
  border: none;
  padding: 0;
  background-color: transparent;
  &:hover {
    opacity: 0.8; /* 마우스 오버 시 투명 */
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export default Header;
