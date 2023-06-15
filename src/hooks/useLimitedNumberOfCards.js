import { useState, useEffect } from 'react';

const getScreenWidth = () => window.screen.width;

export function useLimitedNumberOfCards(dataCards) {
  const [limitCards, setLimitCards] = useState([]);
  const [currentWidth, setCurrentWidth] = useState(getScreenWidth());

  const isNextPageBtn = limitCards.length < dataCards.length;

  const handelAddNextCards = () => {
    const startsWith = limitCards.length; // откуда резать
    let endsWith = 0;

    if (currentWidth > 1280) {
      endsWith = startsWith + 4; // до куда резать
    } else if (currentWidth < 1280 && currentWidth > 1024) {
      endsWith = startsWith + 3;
    } else if (currentWidth < 1024 && currentWidth > 768) {
      endsWith = startsWith + 2;
    } else if (currentWidth < 768) {
      endsWith = startsWith + 1;
    }

    setLimitCards([...limitCards, ...dataCards.slice(startsWith, endsWith)]);
  };

  useEffect(() => {
    const isDataCards = dataCards.length;

    if (isDataCards) {
      if (currentWidth > 1280) {
        setLimitCards(dataCards.slice(0, 16));
      } else if (currentWidth < 1280 && currentWidth > 1024) {
        setLimitCards(dataCards.slice(0, 12));
      } else if (currentWidth < 1024 && currentWidth > 768) {
        setLimitCards(dataCards.slice(0, 8));
      } else if (currentWidth < 768) {
        setLimitCards(dataCards.slice(0, 5));
      }
    }
  }, [dataCards, currentWidth]);

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

  return { limitCards, isNextPageBtn, handelAddNextCards };
}
