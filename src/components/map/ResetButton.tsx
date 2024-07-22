import React from 'react';
import styled from 'styled-components';

export interface ResetButtonProps {
  onClick?: () => void;
}

export const ResetButton: React.FC<ResetButtonProps> = (props) => {
  return (
    <Container onClick={props.onClick}>
      <img src="/img/icons/reset-position.svg" />
    </Container>
  );
};

const Container = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 50%;
  border: none;
`;
