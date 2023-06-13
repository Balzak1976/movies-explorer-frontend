import './Movies.css';
// import { useEffect, useState } from 'react';
import SearchPanel from './SearchPanel/SearchPanel';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Pagination from './Pagination/Pagination';
// import { getAllMoviesFromStorage } from '../../utils/utils';

function Movies({ onSearchForm, dataMovies, onCardClick, onCardDelete, onCardLike }) {
  /* useEffect(() => {
    
  }, []);
 */
  return (
    <div className="movies">
      <SearchPanel onSearchForm={onSearchForm} />
      <MoviesCardList
        movies={dataMovies}
        onCardClick={onCardClick}
        onCardDelete={onCardDelete}
        onCardLike={onCardLike}
      />
      <Pagination isNextPage={true} />
    </div>
  );
}

export default Movies;
