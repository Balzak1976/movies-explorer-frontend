import './Movies.css';
import { useEffect, useState } from 'react';
import SearchPanel from './SearchPanel/SearchPanel';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Pagination from './Pagination/Pagination';

const getScreenWidth = () => {
  return window.screen.width;
};

function Movies({ onSearchForm, dataMovies, onCardClick, onCardDelete, onCardLike }) {
  // console.log('dataMovies: ', dataMovies.length);

  const [movieCards, setMovieCards] = useState([]);
  console.log('movieCards: ', movieCards.length);
  const [isNextPageBtn, setIsNextPageBtn] = useState(false);

  const handelRenderingOfCards = () => {
    const screenWidth = getScreenWidth();
    const startsWith = movieCards.length;
    let endsWith = 0;

    if (screenWidth > 770) {
      endsWith = startsWith + 4;
    } else if (screenWidth < 770 && screenWidth > 440) {
      endsWith = startsWith + 2;
    } else if (screenWidth < 440) {
      endsWith = startsWith + 1;
    }
    // console.log('movieCards: ', startsWith, 'endsWith: ', endsWith);

    setMovieCards([...movieCards, ...dataMovies.slice(startsWith, endsWith)]);
    setIsNextPageBtn(endsWith < dataMovies.length);
  };

  useEffect(() => {
    const screenWidth = getScreenWidth();
    console.log('screenWidth: ', screenWidth);

    if (screenWidth > 770) {
      setMovieCards(dataMovies.slice(0, 16));
    } else if (screenWidth < 770 && screenWidth > 440) {
      setMovieCards(dataMovies.slice(0, 8));
    } else if (screenWidth < 440) {
      setMovieCards(dataMovies.slice(0, 5));
    }
    // console.log('movieCards.length (useEffect): ', movieCards.length);
    // setIsNextPageBtn(movieCards.length < dataMovies.length + 1);
  }, [dataMovies]);

  return (
    <div className="movies">
      <SearchPanel onSearchForm={onSearchForm} />
      <MoviesCardList
        movies={movieCards}
        onCardClick={onCardClick}
        onCardDelete={onCardDelete}
        onCardLike={onCardLike}
      />
      <Pagination onAddNextCards={handelRenderingOfCards} isNextPageBtn={isNextPageBtn} />
    </div>
  );
}

export default Movies;
