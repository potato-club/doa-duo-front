import React, { useState, useEffect, ChangeEvent } from 'react';
import styled from 'styled-components';
// @ts-ignore
import GoogleIMG from "./IMG/GoogleIMG.png";
// @ts-ignore
import 카카오 from "./IMG/카카오톡.png";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [autoLogin, setAutoLogin] = useState<boolean>(false);
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);



  const handleAutoLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAutoLogin(e.target.checked);
    if (!e.target.checked) {
      localStorage.removeItem('credentials');
    }
  };


  return (
    <LoginContainer>
     <div>dsa</div>
   
    </LoginContainer>
  );
};

export default Login;


const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoBox = styled.div`
  text-align: center;
  margin-top: 150px;
  width: 165px;
  height: 115px;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

