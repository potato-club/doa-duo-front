import styled from "styled-components";
import Login from "./pages/LoginPage/Login";
import { Route, Routes, useLocation } from "react-router-dom";
import { RecoilRoot } from "recoil";
import SignUp from "./pages/LoginPage/SignUp";
import { ResponserMainPage } from "./pages/Responser/ResponserMainPage";
import MatchingCompletedModal from "./components/Modal/MatchingCompletedModal";
import Start from "./pages/LoginPage/Start";
import useWindowSize from "./components/UsewindowSize";

interface LayoutProps {
  width:number,
}

function App() {


  const { width, height } = useWindowSize();

  return (
    <RecoilRoot>
      <Layout width={width}>
        <Routes>
        <Route path="/" element={<Start />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/main" element={<Login />} />
          <Route path="/res-main" element={<ResponserMainPage />} />
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
