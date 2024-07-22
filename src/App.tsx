import styled from "styled-components";
import Login from "./pages/LoginPage/Login";
import { Route, Routes, useLocation } from "react-router-dom";
import { RecoilRoot } from "recoil";
import SignUp from "./pages/LoginPage/SignUp";
import { ResponserMainPage } from "./pages/Responser/ResponserMainPage";
import Start from "./pages/LoginPage/Start";
import useWindowSize from "./components/UsewindowSize";
import SwipeableModal from "./components/SwipeableModal";
import React, { useState } from 'react';
import { RequesterMainPage } from "./pages/Requester/RequesterMainPage";

interface LayoutProps {
  width:number,
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState( true);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { width, height } = useWindowSize();

  return (
    <RecoilRoot>
      <Layout width={width}>
      <div>
      <button onClick={openModal}>Open Modal</button>
      <SwipeableModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
        <Routes>
        <Route path="/" element={<Start />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/main" element={<Login />} />
          <Route path="/res-main" element={<ResponserMainPage />} />
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
