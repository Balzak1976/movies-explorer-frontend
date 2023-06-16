import './Movies.css';
import { useEffect } from 'react';
import { useLimitedRenderCards } from '../../hooks/useLimitedRenderCards';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Pagination from './Pagination/Pagination';
import SearchPanel from './SearchPanel/SearchPanel';
import { getMovieSearchResultFromStorage } from '../../utils/utils';

const foundMovies = getMovieSearchResultFromStorage();

function Movies({ onSearchForm, dataMovies, onCardClick, onCardDelete, onCardLike, isPreload, infoToolTip, error }) {
  const { limitedNumberOfCards, isNextPageBtn, handelAddNextCards, setInputData } = useLimitedRenderCards();

  useEffect(() => {
    const data = dataMovies.length === 0 ? foundMovies?.movies : dataMovies;
    setInputData(data);
  }, [dataMovies, foundMovies]);

  return (
    <div className="movies">
      <SearchPanel onSearchForm={onSearchForm} searchData={foundMovies.searchData || {}} />
      <MoviesCardList
        movies={limitedNumberOfCards}
        onCardClick={onCardClick}
        onCardDelete={onCardDelete}
        onCardLike={onCardLike}
        isPreload={isPreload}
        infoToolTip={infoToolTip}
        error={error}
      />
      {infoToolTip.isSuccess && <Pagination onAddNextCards={handelAddNextCards} isNextPageBtn={isNextPageBtn} />}
    </div>
  );
}

export default Movies;
