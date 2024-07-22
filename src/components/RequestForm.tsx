import React from 'react';
import styled from 'styled-components';
import { TextField } from './TextField';

export interface RequestFormSheetProps {}

export const RequestForm: React.FC<RequestFormSheetProps> = (props) => {
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
  padding: 0px 42px 24px 42px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2`
  color: var(--color-primary);
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0px;
`;

const StyledTextField = styled(TextField)`
  width: 100%;
`;
