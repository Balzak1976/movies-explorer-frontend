import './Movies.css';
import { useLimitedRenderCards } from '../../hooks/useLimitedRenderCards';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Pagination from './Pagination/Pagination';
import SearchPanel from './SearchPanel/SearchPanel';
import Preloader from '../Preloader/Preloader';
import InfoToolTip from '../InfoToolTip/InfoToolTip';

function Movies({
  onSearchForm,
  searchData,
  dataMovies,
  onCardClick,
  onCardDelete,
  onCardLike,
  isPreload,
  infoToolTip,
  error,
  isSavedMovies = false,
}) {
  const { cardsLimit, isNextPageBtn, handelAddNextCards, resetCardList } = useLimitedRenderCards(dataMovies);

  const handleSearchForm = (v) => {
    onSearchForm(v);
    // очищаем cardList, чтобы не мелькали старые карточки
    resetCardList();
  };

  return (
    <div className="movies">
      <SearchPanel onSearchForm={handleSearchForm} searchData={searchData} isSavedMovies={isSavedMovies} />

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
