import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Settings {
  dots?: boolean;
  infinite?: boolean;
  speed?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  arrows?: boolean;
  autoplay?: boolean;
  autoplaySpeed?: number;
  nextArrow?: JSX.Element;
  prevArrow?: JSX.Element;
}

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
  };
  return (
    <SliderWrapped>
      <Slider {...settings}>
        <SliderDiv>
          <SliderDivDiv>
            <DataDiv>
              <Year>2024</Year>
              <Month> July</Month>
              <Day> 23</Day>
              <Week>화</Week>
            </DataDiv>
            <PastUseDiv>
              <DefaultForm>주소</DefaultForm>
              <FilledForm>경기도 금정시 군포동</FilledForm>
              <DefaultForm>상세 주소</DefaultForm>
              <FilledForm>금정중학교 앞</FilledForm>
              <DefaultForm>요청 사항</DefaultForm>
              <FilledForm>휠체어에 태워주셨으면 합니다.</FilledForm>
            </PastUseDiv>
          </SliderDivDiv>
        </SliderDiv>
        <SliderDiv>
          <SliderDivDiv>
            <DataDiv>
              <Year>2024</Year>
              <Month> may</Month>
              <Day> 13</Day>
              <Week>화</Week>
            </DataDiv>
            <PastUseDiv>
              <DefaultForm>주소</DefaultForm>
              <FilledForm>경기도 금정시 군포동</FilledForm>
              <DefaultForm>상세 주소</DefaultForm>
              <FilledForm>한세대학교 앞</FilledForm>
              <DefaultForm>요청 사항</DefaultForm>
              <FilledForm>짐을 들어주셨으면 합니다.</FilledForm>
            </PastUseDiv>
          </SliderDivDiv>
        </SliderDiv>
        <SliderDiv>
          <SliderDivDiv>
            <DataDiv></DataDiv>
            <PastUseDiv></PastUseDiv>
          </SliderDivDiv>
        </SliderDiv>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
      </Slider>
    </SliderWrapped>
  );
}

const SliderWrapped = styled.div`
  width: 300px;
  height: 150px;
  background-color: white;
  border-radius: 25px;
  text-align: center;
  .slick-dots li button:before {
    color: #ff8800;
  }
`;

const SliderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;

const SliderDivDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DataDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100px;
  height: 120px;
  border-right: 1px solid #e9e9e9;
  margin: 15px 0px 15px 10px;
  font-family: "BoldFont1";
`;

const PastUseDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 100%;
  height: 120px;
  margin-right: 10px;
  margin-left: 10px;
  background-color: none;
  margin: 10px;
`;

const Year = styled.p`
  display: flex;
  margin: 0px;
  color: #ff8800;
`;
const Month = styled.p`
  display: flex;
  margin: 0px;
  color: #ff8800;
`;
const Day = styled.p`
  display: flex;
  font-size: 32px;
  height: 30px;
  margin: 0px;
`;
const Week = styled.p`
  display: flex;
  margin: 0px;
  margin-top: 5px;
  color: #ff8800;
`;

const DefaultForm = styled.div`
  display: flex;
  font-family: "BoldFont1";
  font-size: 12px;
  margin-top: 9px;
`;

const FilledForm = styled.div`
  display: flex;
  font-family: "LightFont2";
  font-size: 10px;
`;
