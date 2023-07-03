import { useEffect, useState } from 'react';

const getScreenWidth = () => window.screen.width;

export function useLimitedRenderCards() {
  const [movies, setMovies] = useState([]);
  const [limitedCards, setLimitedCards] = useState([]);
  const [currentWidth, setCurrentWidth] = useState(getScreenWidth());

  const isNextPageBtn = limitedCards.length < movies?.length;

  const handelAddNextCards = () => {
    const startsWith = limitedCards.length; // откуда резать
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

    setLimitedCards([...limitedCards, ...movies.slice(startsWith, endsWith)]);
  };

  useEffect(() => {
    if (currentWidth >= 1280) {
      setLimitedCards(movies.slice(0, 16));
    } else if (currentWidth < 1280 && currentWidth >= 1024) {
      setLimitedCards(movies.slice(0, 12));
    } else if (currentWidth < 1024 && currentWidth >= 768) {
      setLimitedCards(movies.slice(0, 8));
    } else if (currentWidth < 768) {
      setLimitedCards(movies.slice(0, 5));
    }
  }, [movies, currentWidth]);

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

  return { setMovies, limitedCards, isNextPageBtn, handelAddNextCards };
}
