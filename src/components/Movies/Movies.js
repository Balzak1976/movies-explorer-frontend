import { useLimitedRenderCards } from '../../hooks/useLimitedRenderCards';
import './Movies.css';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Pagination from './Pagination/Pagination';
import SearchPanel from './SearchPanel/SearchPanel';

function Movies({ onSearchForm, dataMovies, onCardClick, onCardDelete, onCardLike, isPreload, infoToolTip, error }) {
  const { limitCards, isNextPageBtn, handelAddNextCards } = useLimitedRenderCards(dataMovies);

  return (
    <div className="movies">
      <SearchPanel onSearchForm={onSearchForm} />
      <MoviesCardList
        movies={limitCards}
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
