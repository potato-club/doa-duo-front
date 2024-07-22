import styled from "styled-components"
import Login from "./pages/LoginPage/Login";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  return (
    <Layout>
   <Routes>
      <Route path="/login" element={<Login/>}/>
  

   </Routes>
    
    </Layout>
  );
}

export default App;


const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

`;

