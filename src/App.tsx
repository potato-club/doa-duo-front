import styled from 'styled-components';
import Login from './pages/LoginPage/Login';
import { Route, Routes, useLocation } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import SignUp from './pages/LoginPage/SignUp';
import { ResponserMainPage } from './pages/Responser/ResponserMainPage';

function App() {
  return (
    <RecoilRoot>
      <Layout>
        <Routes>
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

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
 @media(max-width: 425px) {
    width: 425px;
 }

`;
