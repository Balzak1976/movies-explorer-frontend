import { useEffect, useState } from 'react';

const getScreenWidth = () => window.screen.width;

export function useLimitedRenderCards() {
  const [inputData, setInputData] = useState([]);
  const [limitedNumberOfCards, setLimitedNumberOfCards] = useState([]);
  const [currentWidth, setCurrentWidth] = useState(getScreenWidth());

  const isNextPageBtn = limitedNumberOfCards.length < inputData?.length;

  const handelAddNextCards = () => {
    const startsWith = limitedNumberOfCards.length; // откуда резать
    let endsWith = 0;

    if (currentWidth >= 1280) {
      endsWith = startsWith + 4; // до куда резать
    } else if (currentWidth < 1280 && currentWidth >= 1024) {
      endsWith = startsWith + 3;
    } else if (currentWidth < 1024 && currentWidth >= 768) {
      endsWith = startsWith + 2;
    } else if (currentWidth < 768) {
      endsWith = startsWith + 1;
    }

    setLimitedNumberOfCards([...limitedNumberOfCards, ...inputData.slice(startsWith, endsWith)]);
  };

  useEffect(() => {
    const isDataCards = inputData?.length;

    if (isDataCards) {
      if (currentWidth >= 1280) {
        setLimitedNumberOfCards(inputData.slice(0, 16));
      } else if (currentWidth < 1280 && currentWidth >= 1024) {
        setLimitedNumberOfCards(inputData.slice(0, 12));
      } else if (currentWidth < 1024 && currentWidth >= 768) {
        setLimitedNumberOfCards(inputData.slice(0, 8));
      } else if (currentWidth < 768) {
        setLimitedNumberOfCards(inputData.slice(0, 5));
      }
    }
  }, [inputData, currentWidth]);

  useEffect(() => {
    let timeOutId = null;

    const handleResize = () => {
      //debounce function
      clearTimeout(timeOutId);

      timeOutId = setTimeout(() => {
        setCurrentWidth(getScreenWidth());
      }, 150);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { limitedNumberOfCards, isNextPageBtn, handelAddNextCards, setInputData };
}
