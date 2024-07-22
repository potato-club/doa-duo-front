import React, { useState, useEffect, ChangeEvent } from "react";
import styled from "styled-components";

const Login: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState(1);
  const [Id , setId] = useState('');
  const [Pw , setPw] = useState('');
  const [isIdPwFilled , setisIdPwFilled] = useState(true);


  const handleChange = (value: number) => {
    setSelectedValue(value);
  };

useEffect(()=>{
    setisIdPwFilled(!(Id && Pw));
},[Id,Pw])


  return (
    <LoginContainer>
      <LoginForm>
        <Header>
          <div>
            <StyledInput
              type="radio"
              value={1}
              checked={selectedValue === 1}
              onChange={() => handleChange(1)}
              name="role"
            />
            헬퍼
          </div>
          <div>
            <StyledInput
              type="radio"
              value={2}
              checked={selectedValue === 2}
              onChange={() => handleChange(2)}
              name="role"
            />
            요청자
          </div>
        </Header>
        <IdPwLayout style={{ marginBottom: "7px" }}>
          ID
          <Credentials>
            <CredentialsInput
              placeholder="아이디"
              style={{ border: "none", borderRadius: "20px" }}
              value={Id}
              onChange={(e)=> setId(e.target.value)}
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
              onChange={(e)=>{setPw(e.target.value)}}
            ></CredentialsInput>
          </Credentials>
        </IdPwLayout>
      <LoginBTN disabled = {isIdPwFilled}>로그인</LoginBTN>

      </LoginForm>

    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const LoginForm = styled.div`
  width: 282px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  font-size: 12px;
  margin-bottom: 20px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

const StyledInput = styled.input.attrs({ type: 'radio' })`
  width: 30px;
  height: 30px;
  margin: 0;
  border: none;

  &:checked {
    accent-color: #FD7B28;
  }
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