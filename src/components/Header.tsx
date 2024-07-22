import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderComponent>
      <Link to="/">
        <LogoComponent>
          <img
            src="/img/HeaderLogo/HeaderLogo.svg"
            alt="헤더로고"
            style={{ width: "100%", height: "100%" }}
          ></img>
        </LogoComponent>
      </Link>
    </HeaderComponent>
  );
};

const HeaderComponent = styled.div`
  width: 100%;
  height: 56px;
  background-color: #ffd466;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0px;
  margin: 0px;
`;

const LogoComponent = styled.button`
  width: 38px;
  height: 38px;
  display: flex;
  border: none;
  padding: 0px;
  background-color: transparent;
  &:hover {
    opacity: 0.8; /* 마우스 오버 시 투명 */
  }
`;

export default Header;
