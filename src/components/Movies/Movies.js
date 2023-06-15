import { useLimitedRenderCards } from '../../hooks/useLimitedRenderCards';
import './Movies.css';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Pagination from './Pagination/Pagination';
import SearchPanel from './SearchPanel/SearchPanel';


function Movies({ onSearchForm, dataMovies, onCardClick, onCardDelete, onCardLike }) {

  const { limitCards, isNextPageBtn, handelAddNextCards } = useLimitedRenderCards(dataMovies);

  return (
    <div className="movies">
      <SearchPanel onSearchForm={onSearchForm} />
      <MoviesCardList
        movies={limitCards}
        onCardClick={onCardClick}
        onCardDelete={onCardDelete}
        onCardLike={onCardLike}
      />
      <Pagination onAddNextCards={handelAddNextCards} isNextPageBtn={isNextPageBtn} />
    </div>
  );
}

export default Movies;
