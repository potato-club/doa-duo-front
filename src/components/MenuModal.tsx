import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "react-use-gesture";
import SimpleSlider from "./SimpleSlider";

const ModalBackdrop = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  transition: opacity 0.3s;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  pointer-events: ${(props) => (props.isOpen ? "auto" : "none")};
  z-index: 1000;
`;

const ModalContent = styled(animated.div)`
  width: 100%;
  max-width: 500px;
  background: linear-gradient(204deg, #f80 3.59%, #ffd769 76.11%);
  border-radius: 20px 20px 0 0;
  box-shadow: 0px -5px 15px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const DragHandle = styled.div`
  width: 140px;
  height: 7px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  top: 11;
  left: 50%;
  transform: translateX(-50%);
  cursor: grab;
`;

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  bottomOffset?: number;
}

export const MenuModal: React.FC<MenuModalProps> = ({
  isOpen,
  onClose,
  bottomOffset,
}) => {
  const [{ y }, api] = useSpring(() => ({ y: window.innerHeight }));

  const openModal = useCallback(() => {
    api.start({ y: 0 });
  }, [api]);

  const closeModal = useCallback(
    (velocity = 0) => {
      api.start({
        y: window.innerHeight,
        config: { velocity },
      });
    },
    [api]
  );

  const handleDrag = useDrag(
    (state) => {
      const { last, velocity, movement, cancel } = state;
      const my = movement[1];

      const modalHeight = window.innerHeight * 0.8;

      if (my < -70) cancel && cancel();

      if (last) {
        if (my > modalHeight / 6 || velocity > 0.5) {
          closeModal(velocity);
          onClose();
        } else {
          openModal();
        }
      } else {
        api.start({ y: my, immediate: true });
      }
    },
    { from: () => [0, y.get()], bounds: { top: 0 }, rubberband: true }
  );

  useEffect(() => {
    if (isOpen) {
      openModal();
    } else {
      closeModal();
    }
  }, [closeModal, isOpen, openModal]);

  return (
    <ModalBackdrop isOpen={isOpen} onClick={isOpen ? onClose : undefined}>
      <ModalContent
        style={{ y, paddingBottom: bottomOffset }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{ paddingTop: "11px", paddingBottom: "37px" }}
          {...handleDrag()}
        >
          <DragHandle />
        </div>
        <Container>
          <LogoDiv src="/img/icons/DoaduoLetterLogo.svg" alt="도와듀오 " />
          <div>
            <ProfileWrapper>
              <ProfileDiv />
              <InfoDiv>
                <ResponseDiv> 응답자 </ResponseDiv>
                <NameDiv> 홍길동님, 반가워요! </NameDiv>
                <AddressDiv> 경기도 군포시 금정동 </AddressDiv>
              </InfoDiv>
            </ProfileWrapper>
            <ButtonWrapper>
              <ButtonDiv>
                <img src="/img/icons/ReviewLogo.svg" alt="리뷰" />
              </ButtonDiv>
              <ButtonDiv>
                <img src="/img/icons/MessageLogo.svg" alt="메시지" />
              </ButtonDiv>
              <ButtonDiv>
                <img src="/img/icons/HistoryLogo.svg" alt="히스토리" />
              </ButtonDiv>
              <ButtonDiv>
                <img src="/img/icons/MyPageLogo.svg" alt="마이페이지" />
              </ButtonDiv>
            </ButtonWrapper>
            <RecentActivityWrapper>
              <RecentActivityp>최근이용내역</RecentActivityp>
              <SimpleSlider />
            </RecentActivityWrapper>
            <LogOutWrapper>
              로그아웃
              <LogOutLogo src="/img/icons/LogOutLogo.svg" alt="로그아웃" />
            </LogOutWrapper>
          </div>
        </Container>
      </ModalContent>
    </ModalBackdrop>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LogoDiv = styled.img`
  width: auto;
  height: 25px;
  padding: 28px 120px 40px 120px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

const ProfileDiv = styled.div`
  display: flex;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 80px;
  margin-bottom: 30px;
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  color: white;
`;
const ResponseDiv = styled.div`
  font-family: "MediumFont2";
  font-size: 10px;
`;

const NameDiv = styled.div`
  font-family: "BoldFont1";
  font-size: 24px;
  margin-bottom: 10px;
`;

const AddressDiv = styled.div`
  font-family: "LightFont2";
  font-size: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  padding: 14px 0 14px 0;
`;

const ButtonDiv = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  border-radius: 50%;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(255, 165, 0, 0.7);
  }
`;

const RecentActivityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RecentActivityp = styled.p`
  width: 100%;
  font-family: "BoldFont1";
  font-size: 16px;
  padding-left: 40px;
  color: white;
`;

const LogOutWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 330px;
  height: 67px;
  background-color: #ff8800;
  margin: 50px 0px 50px 0px;
  border-radius: 10px;
  border: none;
  color: white;
  gap: 20px;
  &:hover {
    box-shadow: 0 4px 8px rgba(255, 165, 0, 0.7);
  }
`;

const LogOutLogo = styled.img`
  display: flex;
  justify-content: right;
`;
