import React from "react";
import styled from "styled-components";

interface ModalAlarmProps {}
const InfoButton: React.FC<ModalAlarmProps> = ({}) => {
  return <ModalAlarmContainer></ModalAlarmContainer>;
};

const ModalAlarmContainer = styled.div`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 0px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 0px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s; /* 배경색 변화 효과 */

  &:hover {
    background-color: #45a049; /* 호버 시 배경색 변화 */
  }
`;

export default InfoButton;
