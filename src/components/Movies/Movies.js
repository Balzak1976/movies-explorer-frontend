import './Movies.css';
import SearchPanel from './SearchPanel/SearchPanel';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Pagination from './Pagination/Pagination';
import { useLimitedNumberOfCards } from '../../hooks/useLimitedNumberOfCards';


function Movies({ onSearchForm, dataMovies: dataCards, onCardClick, onCardDelete, onCardLike }) {

  const { limitCards, isNextPageBtn, handelAddNextCards } = useLimitedNumberOfCards(dataCards);

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
