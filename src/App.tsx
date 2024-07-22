import styled from 'styled-components';
import Login from './pages/LoginPage/Login';
import { Route, Routes, useLocation } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Login />} />
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
`;
