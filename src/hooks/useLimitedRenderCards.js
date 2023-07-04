import { useEffect, useState } from 'react';
import {
  DESKTOP_SCREEN_WIDTH,
  TABLET_SCREEN_WIDTH,
  MOBILE_SCREEN_WIDTH,
  DESKTOP_ADDED_CARD_ROW,
  DESKTOP_TABLET_ADDED_CARD_ROW,
  TABLET_MOBILE_ADDED_CARD_ROW,
  MOBILE_ADDED_CARD_ROW,
  FROM_FIRST_CARD,
  TO_DESKTOP_INITIAL_NUMBER_CARDS,
  TO_DESKTOP_TABLET_INITIAL_NUMBER_CARDS,
  TO_TABLET_MOBILE_INITIAL_NUMBER_CARDS,
  TO_MOBILE_INITIAL_NUMBER_CARDS,
  TIME_DELAY_MS,
} from '../constants/limitedRenderCards';

const getScreenWidth = () => window.screen.width;

export function useLimitedRenderCards() {
  const [initialCards, setInitialCards] = useState([]);
  const [limitedCards, setLimitedCards] = useState([]);
  const [currentWidth, setCurrentWidth] = useState(getScreenWidth());

  const isNextPageBtn = limitedCards.length < initialCards?.length;

  const handelAddNextCards = () => {
    const fromCard = limitedCards.length; // откуда резать
    let toCard = 0;

    if (
      currentWidth >= DESKTOP_SCREEN_WIDTH
    ) {
      toCard = fromCard + DESKTOP_ADDED_CARD_ROW; // до куда резать
    } else if (
      currentWidth < DESKTOP_SCREEN_WIDTH && currentWidth >= TABLET_SCREEN_WIDTH
    ) {
      toCard = fromCard + DESKTOP_TABLET_ADDED_CARD_ROW;
    } else if (
      currentWidth < TABLET_SCREEN_WIDTH && currentWidth >= MOBILE_SCREEN_WIDTH
    ) {
      toCard = fromCard + TABLET_MOBILE_ADDED_CARD_ROW;
    } else if (
      currentWidth < MOBILE_SCREEN_WIDTH
    ) {
      toCard = fromCard + MOBILE_ADDED_CARD_ROW;
    }

    setLimitedCards([...limitedCards, ...initialCards.slice(fromCard, toCard)]);
  };

  useEffect(() => {
    if (
      currentWidth >= DESKTOP_SCREEN_WIDTH
    ) {
      setLimitedCards(initialCards.slice(FROM_FIRST_CARD, TO_DESKTOP_INITIAL_NUMBER_CARDS));
    } else if (
      currentWidth < DESKTOP_SCREEN_WIDTH && currentWidth >= TABLET_SCREEN_WIDTH
    ) {
      setLimitedCards(initialCards.slice(FROM_FIRST_CARD, TO_DESKTOP_TABLET_INITIAL_NUMBER_CARDS));
    } else if (
      currentWidth < TABLET_SCREEN_WIDTH && currentWidth >= MOBILE_SCREEN_WIDTH
    ) {
      setLimitedCards(initialCards.slice(FROM_FIRST_CARD, TO_TABLET_MOBILE_INITIAL_NUMBER_CARDS));
    } else if (
      currentWidth < MOBILE_SCREEN_WIDTH
    ) {
      setLimitedCards(initialCards.slice(FROM_FIRST_CARD, TO_MOBILE_INITIAL_NUMBER_CARDS));
    }
  }, [initialCards, currentWidth]);

  useEffect(() => {
    let timeOutId = null;

    const handleResize = () => {
      //debounce function
      clearTimeout(timeOutId);

      timeOutId = setTimeout(() => {
        setCurrentWidth(getScreenWidth());
      }, TIME_DELAY_MS);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return [ setInitialCards, limitedCards, isNextPageBtn, handelAddNextCards ];
}
