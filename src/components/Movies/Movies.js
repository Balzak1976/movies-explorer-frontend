import './Movies.css';
import { useEffect } from 'react';
import { useLimitedRenderCards } from '../../hooks/useLimitedRenderCards';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Pagination from './Pagination/Pagination';
import SearchPanel from './SearchPanel/SearchPanel';
// import { getMovieSearchResultFromStorage } from '../../utils/utils';
import Preloader from '../Preloader/Preloader';
import InfoToolTip from '../InfoToolTip/InfoToolTip';

// const foundMovies = getMovieSearchResultFromStorage();

function Movies({
  onSearchForm,
  dataMovies,
  onCardClick,
  onCardDelete,
  onCardLike,
  isPreload,
  infoToolTip,
  error,
  isSavedMovies = false,
}) {
  const { cardsLimit, isNextPageBtn, handelAddNextCards, setInputData, resetCardList } = useLimitedRenderCards();

  const handleSearchForm = (v) => {
    onSearchForm(v);
    // очищаем cardList, чтобы не мелькали старые карточки
    resetCardList();
  };

  useEffect(() => {
    setInputData(dataMovies);
  }, [dataMovies]);

  return (
    <div className="movies">
      <SearchPanel onSearchForm={handleSearchForm} searchData={{}} />

      {isPreload && <Preloader />}
      {infoToolTip.notFound && <InfoToolTip infoToolTip={infoToolTip} error={error} />}
      {error?.status && <InfoToolTip infoToolTip={infoToolTip} error={error} />}

      {!isPreload && !infoToolTip.notFound && cardsLimit && (
        <MoviesCardList
          movies={cardsLimit}
          onCardClick={onCardClick}
          onCardDelete={onCardDelete}
          onCardLike={onCardLike}
          isSavedMovies={isSavedMovies}
        />
      )}

      {!isPreload && !infoToolTip.notFound && (
        <Pagination onAddNextCards={handelAddNextCards} isNextPageBtn={isNextPageBtn} />
      )}
    </div>
  );
}

export default Movies;
