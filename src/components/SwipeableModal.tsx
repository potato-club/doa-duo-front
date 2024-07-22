import React, { useEffect } from 'react';
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
  opacity: ${props => (props.isOpen ? 1 : 0)};
  pointer-events: ${props => (props.isOpen ? 'auto' : 'none')};
  z-index: 1000;
`;

const ModalContent = styled(animated.div)`
  width: 100%;
  max-width: 500px;
  height: 80%;
  background: white;
  border-radius: 20px 20px 0 0;
  box-shadow: 0px -5px 15px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const DragHandle = styled.div`
  width: 140px;
  height: 7px;
  background-color: #ccc;
  border-radius: 3px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  cursor: grab;
`;

interface SwipeableModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SwipeableModal: React.FC<SwipeableModalProps> = ({ isOpen, onClose }) => {
  // Initial y value is set to window.innerHeight to hide the modal initially
  const [{ y }, api] = useSpring(() => ({ y: window.innerHeight }));

  // Open the modal
  const openModal = () => {
    api.start({ y: 0 });
  };

  // Close the modal with velocity
  const closeModal = (velocity = 0) => {
    api.start({ y: window.innerHeight, config: { velocity }, onRest: () => onClose() });
  };

  // Handle drag for modal swipe
  const handleDrag = useDrag(
    (state:any) => {
      const { last, velocity, movement, cancel } = state;
      const vy = velocity[1];
      const my = movement[1];

      // Get modal's height
      const modalHeight = window.innerHeight * 0.8;
      const halfModalHeight = modalHeight / 2;

      if (my < -70) cancel && cancel(); // If dragging up more than 70 pixels, cancel the drag

      if (last) {
        // Close the modal if dragged down more than half of its height or velocity is high
        if (my > halfModalHeight || vy > 0.5) {
          closeModal(vy);
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
  }, [isOpen]);

  return (
    <ModalBackdrop isOpen={isOpen} onClick={isOpen ? onClose : undefined}>
      <ModalContent style={{ y }} onClick={(e) => e.stopPropagation()}>
        <DragHandle {...handleDrag()} />
        <div style={{ padding: '20px' }}>
        </div>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default SwipeableModal;
