import './Movies.css';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Pagination from './Pagination/Pagination';
import SearchPanel from './SearchPanel/SearchPanel';
import Preloader from '../Preloader/Preloader';
import InfoToolTip from '../InfoToolTip/InfoToolTip';

function Movies({
  onSearchForm,
  searchData,
  dataMovies,
  onCardDelete,
  onCardLike,
  isPreload,
  infoToolTip,
  error,
  isSavedMovies = false,
  onAddNextCards,
  isNextPageBtn,
}) {
  return (
    <div className="movies">
      <SearchPanel onSearchForm={onSearchForm} searchData={searchData} />

      {isPreload && <Preloader />}
      {infoToolTip.notFound && <InfoToolTip infoToolTip={infoToolTip} error={error} />}
      {error?.status && <InfoToolTip infoToolTip={infoToolTip} error={error} />}

      {!isPreload && !infoToolTip.notFound && dataMovies && (
        <MoviesCardList
          movies={dataMovies}
          onCardDelete={onCardDelete}
          onCardLike={onCardLike}
          isSavedMovies={isSavedMovies}
        />
      )}

      {!isPreload && !infoToolTip.notFound && (
        <Pagination onAddNextCards={onAddNextCards} isNextPageBtn={isNextPageBtn} />
      )}
    </div>
  );
}

export default Movies;
