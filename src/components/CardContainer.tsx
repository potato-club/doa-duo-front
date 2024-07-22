import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "@react-spring/web";
import { RequestCard } from "./RequestCard";

const array = [
  {
    name: "조용수1",
    info: "저는 다리가 아픕니다.",
    address: "경기도 군포시 금정동",
    content: "휠체저에 태워주셨스염며ㅛㄴ...",
  },
  {
    name: "조용수2",
    info: "저는 다리가 아픕니다.",
    address: "경기도 군포시 금정동",
    content: "휠체저에 태워주셨스염며ㅛㄴ...",
  },
  {
    name: "조용수3",
    info: "저는 다리가 아픕니다.",
    address: "경기도 군포시 금정동",
    content: "휠체저에 태워주셨스염며ㅛㄴ...",
  },
];

const CardContainer: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [props, api] = useSpring(() => ({ opacity: 1, transform: 'translateX(100px)' }));

  const handleReject = () => {
    api.start({
      opacity: 0,
      config: { duration: 300 },
      onRest: () => {
        setIndex((prev) => (prev + 1) % array.length); // 다음 카드로 인덱스 업데이트
        api.start({ opacity: 1, transform: 'translateX(0px)' }); // 애니메이션 초기화
      }
    });
  };

  return (
    <CardContainerWrapper>
      <StyledRequestCard style={{ ...props }}>
        <RequestCard
          name={array[index].name}
          info={array[index].info}
          address={array[index].address}
          content={array[index].content}
          onReject={handleReject} // "거절" 버튼 클릭 시 handleReject 호출
        />
      </StyledRequestCard>
      {array[index + 1] && (
        <NextRequestCard>
          <RequestCard
            name={array[index + 1].name}
            info={array[index + 1].info}
            address={array[index + 1].address}
            content={array[index + 1].content}
            onReject={() => {}} // 비워둠
          />
        </NextRequestCard>
      )}
    </CardContainerWrapper>
  );
};

export default CardContainer;

const CardContainerWrapper = styled.div`
  display: flex;
  overflow-x: hidden;
  position: relative;
  width: 100%;
  height: 305px;
  justify-content: center;
  align-items: center;
`;

const StyledRequestCard = styled(animated.div)`
  flex: 0 0 80%;
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  position: absolute;
  z-index: 1;
`;

const NextRequestCard = styled.div`
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  position: absolute;
  right: 10%;
  opacity: 0.7;
  z-index: 0;
  transform: translatex(100%);
`;
