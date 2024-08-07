import React from 'react';
import styled from 'styled-components';

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const TextField: React.FC<TextFieldProps> = ({
  className,
  ...props
}) => {
  return (
    <Container className={className}>
      <Input {...props} />
    </Container>
  );
};

const Container = styled.div`
  background-color: var(--color-gray-50);
  padding: 12px 0;
  border-radius: 20px;
  outline: none;
  display: flex;
`;

const Input = styled.input`
  padding: 0 20px;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 100%;

  ::placeholder {
    color: var(--color-gray-500);
  };
`;
