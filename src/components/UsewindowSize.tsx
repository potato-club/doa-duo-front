import { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.visualViewport!.width,
    height: window.visualViewport!.height,
  });

  useEffect(() => {
    // Function to update window size
    function handleResize() {
      setWindowSize({
        width: window.visualViewport!.width,
        height: window.visualViewport!.height,
      });
    }

    // Add event listeners for visual viewport changes
    window.visualViewport!.addEventListener('resize', handleResize);
    window.visualViewport!.addEventListener('scroll', handleResize);

    // Initial update
    handleResize();

    // Cleanup event listeners on component unmount
    return () => {
      window.visualViewport!.removeEventListener('resize', handleResize);
      window.visualViewport!.removeEventListener('scroll', handleResize);
    };
  }, []);

  return windowSize;
}

export default useWindowSize;
