import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from 'react-use-gesture';

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
  pointer-events: ${(props) => (props.isOpen ? 'auto' : 'none')};
  z-index: 1000;
`;

const ModalContent = styled(animated.div)`
  width: 100%;
  max-width: 500px;
  background: linear-gradient(204deg, #F80 3.59%, #FFD769 76.11%);
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

  const closeModal = useCallback((velocity = 0) => {
    api.start({
      y: window.innerHeight,
      config: { velocity },
    });
  }, [api]);

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
          style={{ paddingTop: '11px', paddingBottom: '37px' }}
          {...handleDrag()}
        >
          <DragHandle />
        </div>
        <div>asdf</div>
      </ModalContent>
    </ModalBackdrop>
  );
};
