import styled from "styled-components";
import Login from "./pages/LoginPage/Login";
import { Route, Routes, useLocation } from "react-router-dom";
import { RecoilRoot } from "recoil";
import SignUp from "./pages/LoginPage/SignUp";
import { RespondentMainPage } from "./pages/Respondent/RespondentMainPage";
import Start from "./pages/LoginPage/Start";
import useWindowSize from "./components/UsewindowSize";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import React from 'react';
import { RequesterMainPage } from "./pages/Requester/RequesterMainPage";


interface LayoutProps {
  width:number,
}

function App() {
  const { width, height } = useWindowSize();
  const location = useLocation();
  const [isHeaderContain, setisHeaderContain] = useState(false);
  
  useEffect(() => {
    setisHeaderContain(location.pathname.includes("/header"));
  }, [location]);

  return (
    <RecoilRoot>

      <Layout width={width}>

        {isHeaderContain && <Header backgroundcolor="#FFD769"/>}
        <Routes>
        <Route path="/" element={<Start />} />
          <Route path="/header/login" element={<Login />} />
          <Route path="/header/signup" element={<SignUp />} />
          <Route path="/res-main" element={<RespondentMainPage />} />
          <Route path="/header/main" element={<RespondentMainPage />} />
        <Route path="/" element={<Start />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/main" element={<Login />} />
          <Route path="/res-main" element={<RespondentMainPage />} />
          <Route path="/req-main" element={<RequesterMainPage />} />
        </Routes>
      </Layout>
    </RecoilRoot>
  );
}

export default App;

const Layout = styled.div<LayoutProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
  @media (max-width: 425px) {
    width: ${props => props.width}px;
  }
`;
