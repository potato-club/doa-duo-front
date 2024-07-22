import React, { useState, useEffect, ChangeEvent } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useWindowSize from "../../components/UsewindowSize";

interface LoginContainerProps  {
  height: number,
}

const Login: React.FC = () => {
  const [Id, setId] = useState("");
  const [Pw, setPw] = useState("");
  const [isIdPwFilled, setisIdPwFilled] = useState(true);
  const navigate = useNavigate();
  const { width, height } = useWindowSize();

  useEffect(() => {
    setisIdPwFilled(!(Id && Pw));
  }, [Id, Pw]);

  const handleSubmit = async () => {
    const data = {
      email: Id,
      password: Pw,
    };

    try {
      const res = await axios.post(
        "http://15.164.154.44:8081/api/user/login",
        data
      );
      console.log(res);

      const jwtToken = res.headers["at"];
      localStorage.setItem("At", jwtToken);
      const refreshToken = res.headers["rt"];
      localStorage.setItem("Rt", refreshToken);
      navigate("/header/main");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginContainer height={height} >
      <Div>      <Logo><img src="/img/icons/LoginLogo.svg"/></Logo>
      <LoginForm>
        <IdPwLayout style={{ marginBottom: "7px" }}>
          ID
          <Credentials>
            <CredentialsInput
              placeholder="아이디"
              style={{ border: "none", borderRadius: "20px" }}
              value={Id}
              onChange={(e) => setId(e.target.value)}
            />
          </Credentials>
        </IdPwLayout>

        <IdPwLayout>
          PW
          <Credentials>
            {" "}
            <CredentialsInput
              placeholder="비밀번호"
              type="password"
              style={{ border: "none", borderRadius: "20px" }}
              value={Pw}
              onChange={(e) => {
                setPw(e.target.value);
              }}
            ></CredentialsInput>
          </Credentials>
        </IdPwLayout>
       
      </LoginForm>
      </Div>

      <LoginBTN disabled={isIdPwFilled} onClick={handleSubmit}>
          로그인
        </LoginBTN>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div<LoginContainerProps>`
  margin-top: 65.5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: ${props => props.height}px;


`;

const Div = styled.div`

    display:flex;
    flex-direction: column;
    align-items: center;


`

const LoginForm = styled.div`
  width: 282px;
  display: flex;
  flex-direction: column;
`;


const IdPwLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
`;

const CredentialsInput = styled.input`
  padding: 0 20px;
  border: "none";
  outline: none;
  background-color: transparent;
  font-size: 10px;
`;

const Credentials = styled.div`
  background-color: #f2f2f2;
  width: 230px;
  height: 40px;
  border: "none";
  border-radius: 20px;
  outline: none;
  display: flex;
`;

const LoginBTN = styled.button`
  background-color: ${({ disabled }) => (disabled ? "#ccc" : "#FD7B28")};
  color: ${({ disabled }) => (disabled ? "#858585" : "white")};
  border: none;
  width: 100%;
  height: 52px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease;

  &:disabled {
    cursor: not-allowed;
  }
`;

const Logo = styled.div`
    width:178px;
    height: 32px;
    margin-bottom: 27px;
    display: flex;
   
`;