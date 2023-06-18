import './Movies.css';
import { useEffect } from 'react';
import { useLimitedRenderCards } from '../../hooks/useLimitedRenderCards';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Pagination from './Pagination/Pagination';
import SearchPanel from './SearchPanel/SearchPanel';
import { getMovieSearchResultFromStorage } from '../../utils/utils';
import Preloader from '../Preloader/Preloader';
import InfoToolTip from '../InfoToolTip/InfoToolTip';

const foundMovies = getMovieSearchResultFromStorage();

function Movies({ onSearchForm, dataMovies, onCardClick, onCardDelete, onCardLike, isPreload, infoToolTip, error }) {
  const { cardsLimit, isNextPageBtn, handelAddNextCards, setInputData, resetCardList } = useLimitedRenderCards();

  const handleSearchForm = (v) => {
    onSearchForm(v);
    // очищаем cardList, чтобы не мелькали старые карточки
    resetCardList();
  };

  useEffect(() => {
    const data = dataMovies.length === 0 ? foundMovies?.movies : dataMovies;
    setInputData(data);
  }, [dataMovies, foundMovies]);

  return (
    <div className="movies">
      <SearchPanel onSearchForm={handleSearchForm} searchData={foundMovies.searchData || {}} />

      {isPreload && <Preloader />}
      {infoToolTip.notFound && <InfoToolTip infoToolTip={infoToolTip} error={error} />}
      {error?.status && <InfoToolTip infoToolTip={infoToolTip} error={error} />}

      {!isPreload && !infoToolTip.notFound && cardsLimit && (
        <MoviesCardList
          movies={cardsLimit}
          onCardClick={onCardClick}
          onCardDelete={onCardDelete}
          onCardLike={onCardLike}
        />
      )}

      {!isPreload && !infoToolTip.notFound && (
        <Pagination onAddNextCards={handelAddNextCards} isNextPageBtn={isNextPageBtn} />
      )}
    </div>
  );
}

export default Movies;
