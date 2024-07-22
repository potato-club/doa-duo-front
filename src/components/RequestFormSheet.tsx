import React from 'react';
import styled from 'styled-components';
import { TextField } from './TextField';

export interface RequestFormSheetProps {}

export const RequestFormSheet: React.FC<RequestFormSheetProps> = (props) => {
  return (
    <Container>
      <Title>여기로 부를까요?</Title>
      <StyledTextField placeholder="현 주소" />
      <StyledTextField placeholder="상세 주소" />
      <StyledTextField placeholder="요청사항을 적어주세요" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 55px 42px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  background-color: white;
  border-radius: 25px 25px 0px 0px;
  box-shadow: 0px -2px 7px 0px rgba(0, 0, 0, 0.25);
`;

const Title = styled.h2`
  color: var(--color-primary);
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const StyledTextField = styled(TextField)`
  width: 100%;
`;
