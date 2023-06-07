import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import MoviesCardList from './MoviesCardList/MoviesCardList';

function Movies() {
  return (
    <div className="movies">
      <section className="search-panel">
        <div className="form-row">
          <SearchForm />
          <FilterCheckbox />
        </div>
      </section>

      <MoviesCardList />
      
      <section className="pagination">
        <button
          className="pagination__btn"
          type="button"
          aria-label="переход на следующую страницу">Ещё</button>
      </section>
    </div>
  );
}

export default Movies;
