import { useState, useEffect } from 'react';

const getWidth = () => {
  return document.documentElement.clientWidth;
};

function useScreenSize() {
  const [size, setSize] = useState({ width: getWidth() });

  useEffect(() => {
    let timeOutId = null;

    const handleResize = () => {
      //debounce function
      clearTimeout(timeOutId);

      timeOutId = setTimeout(() => {
        setSize({
          width: getWidth(),
        });
      }, 150);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}

export default useScreenSize;
