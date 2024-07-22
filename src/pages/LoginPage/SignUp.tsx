import React, { useState, useEffect, ChangeEvent } from "react";
import styled from "styled-components";
import axios from "axios";
import useWindowSize from "../../components/UsewindowSize";
import { useNavigate } from "react-router-dom";

interface LoginContainerProps {
  height: number;
}

const SignUp: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [Id , setId] = useState('');
  const [Name , setName] = useState('');
  const [Pw , setPw] = useState('');
  const [CheckPw , setCheckPw] = useState('');
  const [isIdPwFilled , setisIdPwFilled] = useState(true);
  const [isPwMismatch, setIsPwMismatch] = useState(false);
  const navigate = useNavigate();
  const { width, height } = useWindowSize();
  const handleChange = (value: string) => {
    setSelectedValue(value);
  };

useEffect(()=>{
    setisIdPwFilled(!(Id && Pw && CheckPw && Name && selectedValue));
},[Id,Pw,CheckPw, Name,selectedValue])

const handleCheckNewPWChange = (e: ChangeEvent<HTMLInputElement>) => {
    const CheckPw = e.target.value;
    setCheckPw(CheckPw);
    if (Pw !== CheckPw) {
        setIsPwMismatch(true);
    } else {
        setIsPwMismatch(false);
    }
  };

  const handleSignUp =async()=>{
    const data = {
      email:Id,
      password:Pw,
      username: Name,
      userRole: selectedValue,
    };
    try{
      const res = await axios.post('http://15.164.154.44:8081/api/user/signup',data);
      if(res.status === 200){
        navigate('/login')
      }
      console.log(res);
    }catch(error){
      console.log(error);

    }
  }

  return (
    <LoginContainer height={height}>
      <Div>     <Logo><img src="/img/icons/LoginLogo.svg"/></Logo>
      <LoginForm>
        <Header>
          <div style={{gap:'12px'}}>
            <StyledInput
              type="radio"
              value={1}
              checked={selectedValue === "RESPONDENT"}
              onChange={() => handleChange("RESPONDENT")}
              name="role"
            />
            헬퍼 회원가입
          </div>
          <div style={{gap:'12px'}}>
            <StyledInput
              type="radio"
              value={2}
              checked={selectedValue === "REQUESTER"}
              onChange={() => handleChange("REQUESTER")}
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
          </Credentials>
          
        </IdPwLayout>
        <IdPwLayout style={{ marginBottom: "7px" }}>
          이름
          <Credentials>
            <CredentialsInput
              placeholder="아이디를 입력해주세요"
              style={{ border: "none", borderRadius: "20px" }}
              value={Name}
              onChange={(e)=> setName(e.target.value)}
            ></CredentialsInput>
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

      </LoginForm>

      </Div>

      <LoginBTN disabled = {isPwMismatch || isIdPwFilled } onClick={handleSignUp}>회원가입</LoginBTN>

    </LoginContainer>
  );
};

export default SignUp;

const LoginContainer = styled.div<LoginContainerProps>`
  margin-top: 65.5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: ${(props) => props.height}px;
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
  border: 2px solid #ccc; 
  border-radius: 50%; 
  appearance: none; 
  position: relative; 


  &::before {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: white;
    position: absolute;
    top: 50%; 
    left: 50%;
    transform: translate(-50%, -50%); 
    transition: background-color 0.2s ease;
  }

  &:checked::before {
    background-color: #FD7B28; 
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
border-bottom: 1px solid #F5F5F5;
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



const Logo = styled.div`
    width:178px;
    height: 32px;
    margin-bottom: 27px;
    display: flex;
    justify-content: center;
    align-items: center;


`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;