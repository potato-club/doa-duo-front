import React from "react";
import styled from "styled-components";

interface RequestNotesProps {
  Address: string;
  AddRessDetail: string;
  Request: string;
}
const RequestNotes: React.FC<RequestNotesProps> = ({
  Address,
  AddRessDetail,
  Request,
}) => {
  return (
    <RequestNotesContainer>
      <LabelText>주소 : </LabelText>
      <InputText> {Address} </InputText>
      <LabelText>상세 주소 : </LabelText>{" "}
      <InputText> {AddRessDetail} </InputText>
      <LabelText>요청 사항 : </LabelText>
      <InputText> {Request} </InputText>
      <HamburgerButton>
        <img src="/img/icons/hamburger.svg" alt="..." />
      </HamburgerButton>
    </RequestNotesContainer>
  );
};

const RequestNotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: calc(100vw - 80px);
  height: 220px;
  background-color: #ffd769;
  border: none;
  color: #ff8800;
  padding: 0px;
  text-align: left;
  text-decoration: none;
  position: relative;
  margin: 0px;
  cursor: pointer;
  border-radius: 15px;
`;

const LabelText = styled.p`
  color: #ff8800;
  font-family: "BoldFont";
  font-size: 16px;
  margin: 22px 30px 0px 30px;
  position: relative;
`;

const InputText = styled.p`
  color: #555555;
  font-family: "LightFont";
  font-size: 12px;
  margin: 10px 30px 0px 30px;
  position: relative;
`;

const HamburgerButton = styled.button`
  top: 15px;
  right: 15px;
  width: 20px;
  height: 5px;
  color: #ff8800;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  border: none;
  background-color: transparent;
  transition: background-color 0.3s; /* 배경색 변화 효과 */

  &:hover {
    background-color: #ffa424; /* 호버 시 배경색 변화 */
  }
`;
export default RequestNotes;
