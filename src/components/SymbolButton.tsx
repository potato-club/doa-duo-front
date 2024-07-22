import React from "react";
import styled from "styled-components";

interface SymbolProps {
  label: string;
}
const SymbolButton: React.FC<SymbolProps> = ({ label }) => {
  return <SymbolButtonContainer>{label}</SymbolButtonContainer>;
};

const SymbolButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 82px;
  height: 82px;
  background-color: #ea4b04;
  border: none;
  color: white;
  padding: 0px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 0px;
  cursor: pointer;
  border-radius: 100%;
  transition: background-color 0.3s; /* 배경색 변화 효과 */

  &:hover {
    background-color: #ffa424; /* 호버 시 배경색 변화 */
  }
`;

export default SymbolButton;
