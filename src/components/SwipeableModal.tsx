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
  display: flex;
  align-items: flex-end;
  justify-content: center;
  transition: background-color 0.3s;
  pointer-events: none;
  z-index: 1000;
`;

const ModalContent = styled(animated.div)`
  width: 100%;
  max-width: 500px;
  background: white;
  border-radius: 20px 20px 0 0;
  box-shadow: 0px -5px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  pointer-events: auto;
`;

const DragHandle = styled.div`
  width: 140px;
  height: 7px;
  background-color: #ccc;
  border-radius: 3px;
  position: absolute;
  top: 11;
  left: 50%;
  transform: translateX(-50%);
  cursor: grab;
`;

interface SwipeableModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  children?: React.ReactNode;
  bottomOffset?: number;
}

const OFFSET = 500;

export const SwipeableModal: React.FC<SwipeableModalProps> = ({
  isOpen,
  onOpen,
  onClose,
  children,
  bottomOffset,
}) => {
  const [{ y }, api] = useSpring(() => ({ y: window.innerHeight }));

  const openModal = useCallback(
    (velocity = 0) => {
      api.start({ y: 0, config: { velocity } });
    },
    [api]
  );

  const closeModal = useCallback(
    (velocity = 0) => {
      api.start({
        y: window.innerHeight - OFFSET,
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

      if (isOpen) {
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
      } else {
        if (last) {
          if (my < (modalHeight * 5) / 6 || velocity > 0.5) {
            openModal(velocity);
            onOpen();
          } else {
            closeModal();
          }
        } else {
          api.start({ y: window.innerHeight - OFFSET + my, immediate: true });
        }
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
        {children}
      </ModalContent>
    </ModalBackdrop>
  );
};
