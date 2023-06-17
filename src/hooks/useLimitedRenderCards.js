import { useEffect, useState, useCallback } from 'react';

const getScreenWidth = () => window.screen.width;

export function useLimitedRenderCards() {
  const [inputData, setInputData] = useState([]);
  const [cardsLimit, setCardsLimit] = useState([]);
  const [currentWidth, setCurrentWidth] = useState(getScreenWidth());

  const isNextPageBtn = cardsLimit.length < inputData?.length;

  const handelAddNextCards = () => {
    const startsWith = cardsLimit.length; // откуда резать
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

    setCardsLimit([...cardsLimit, ...inputData.slice(startsWith, endsWith)]);
  };

  useEffect(() => {
    const isDataCards = inputData?.length;

    if (isDataCards) {
      if (currentWidth >= 1280) {
        setCardsLimit(inputData.slice(0, 16));
      } else if (currentWidth < 1280 && currentWidth >= 1024) {
        setCardsLimit(inputData.slice(0, 12));
      } else if (currentWidth < 1024 && currentWidth >= 768) {
        setCardsLimit(inputData.slice(0, 8));
      } else if (currentWidth < 768) {
        setCardsLimit(inputData.slice(0, 5));
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

  const resetCardList = useCallback(
    (newData = []) => {
      setCardsLimit(newData);
    },[setCardsLimit]
  );

  return { cardsLimit, isNextPageBtn, handelAddNextCards, setInputData, resetCardList };
}
