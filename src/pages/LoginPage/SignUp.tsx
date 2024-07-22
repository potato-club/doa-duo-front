import React, { useState, useEffect, ChangeEvent } from "react";
import styled from "styled-components";

const SignUp: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState(1);
  const [Id , setId] = useState('');
  const [Pw , setPw] = useState('');
  const [CheckPw , setCheckPw] = useState('');
  const [isIdPwFilled , setisIdPwFilled] = useState(true);
  const [isPwMismatch, setIsPwMismatch] = useState(false);

  const handleChange = (value: number) => {
    setSelectedValue(value);
  };

useEffect(()=>{
    setisIdPwFilled(!(Id && Pw && CheckPw));
},[Id,Pw,CheckPw])

const handleCheckNewPWChange = (e: ChangeEvent<HTMLInputElement>) => {
    const CheckPw = e.target.value;
    setCheckPw(CheckPw);
    if (Pw !== CheckPw) {
        setIsPwMismatch(true);
    } else {
        setIsPwMismatch(false);
    }
  };


  return (
    <LoginContainer>
      <LoginForm>
        <Header>
          <div style={{gap:'12px'}}>
            <StyledInput
              type="radio"
              value={1}
              checked={selectedValue === 1}
              onChange={() => handleChange(1)}
              name="role"
            />
            헬퍼 회원가입
          </div>
          <div style={{gap:'12px'}}>
            <StyledInput
              type="radio"
              value={2}
              checked={selectedValue === 2}
              onChange={() => handleChange(2)}
              name="role"
            />
            요청자 회원가입
          </div>
        </Header>
        <IdPwLayout style={{ marginBottom: "7px" }}>
          아이디
          <Credentials>
            <CredentialsInput
              placeholder="아이디를 입력해주세요"
              style={{ border: "none", borderRadius: "20px" }}
              value={Id}
              onChange={(e)=> setId(e.target.value)}
            ></CredentialsInput>
           <CheckBTN >중복확인</CheckBTN>
          </Credentials>
          
        </IdPwLayout>

        <IdPwLayout>
          비밀번호
          <Credentials>
            {" "}
            <CredentialsInput
              placeholder="비밀번호를 입력해주세요"
              type="password"
              style={{ border: "none", borderRadius: "20px" }}
              value={Pw}
              onChange={(e)=>{setPw(e.target.value)}}
            ></CredentialsInput>
          </Credentials>
        </IdPwLayout>

        <IdPwLayout>
          비밀번호 확인
          <Credentials>
            {" "}
            <CredentialsInput
              placeholder="비밀번호를 다시 한번 입력해주세요"
              type="password"
              style={{ border: "none", borderRadius: "20px" }}
              value={CheckPw}
              onChange={(e)=>{handleCheckNewPWChange(e)}}
            ></CredentialsInput>
          </Credentials>
        </IdPwLayout>
        {
            isPwMismatch && <div>비밀번호가 일치하지 않습니다</div> 
        }
      <LoginBTN disabled = {isPwMismatch || isIdPwFilled}>회원가입</LoginBTN>

      </LoginForm>

    </LoginContainer>
  );
};

export default SignUp;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const LoginForm = styled.div`
  width: 329px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  font-size: 12px;
  margin-bottom: 29px;
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
  flex-direction: column;
  justify-content: space-between;
  font-weight: bold;
  margin: 10px 0;
`;

const CredentialsInput = styled.input`
  border: "none";
  outline: none;
  background-color: transparent;
  width: 100%;

  &::placeholder {
    color: #9D9D9D;
    font-size: 10px;
  }
`;

const Credentials = styled.div`
border-bottom: 1px solid #9D9D9D;
  width: 100%;
  height: 40px;
  border: "none";
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

const CheckBTN = styled.button`
    align-items: center;
    background-color: transparent;
    border-radius: 14px ;
    border: 2px solid #F80;
    color: #F80;
    width: 80px;
    height: 38px;
    font-size: 12px;
`;