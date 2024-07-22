import React from 'react';
import styled from 'styled-components';
import { TextField } from './TextField';

export interface RequestFormSheetProps {
  onSubmit: (data: { detailAddress: string; quickMessage: string }) => void;
  currentAddress?: string;
}

export const RequestForm: React.FC<RequestFormSheetProps> = (props) => {
  const [detailAddress, setDetailAddress] = React.useState('');
  const [quickMessage, setQuickMessage] = React.useState('');

  return (
    <Container>
      <Title>현 주소를 설정해주세요!</Title>
      <StyledTextField placeholder="현 주소" value={props.currentAddress} />
      <StyledTextField
        placeholder="상세주소를 입력해주세요."
        value={detailAddress}
        onChange={(event) => setDetailAddress(event.target.value)}
      />
      <StyledTextField
        placeholder="요청사항을 적어주세요."
        value={quickMessage}
        onChange={(event) => setQuickMessage(event.target.value)}
      />
      <SubmitButton
        onClick={() => props.onSubmit({ detailAddress, quickMessage })}
      >
        요청하기
      </SubmitButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 0px 42px 24px 42px;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  color: var(--color-primary);
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0px;
  margin-bottom: 17px;
`;

const StyledTextField = styled(TextField)`
  width: 100%;
  margin-top: 13px;
`;

const SubmitButton = styled.button`
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background-color: var(--color-secondary);
  border: none;
  color: #fff;
  text-align: center;
  font-family: 12LotteMartHappyBold;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 10px;
`;
