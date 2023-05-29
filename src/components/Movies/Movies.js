import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import MoviesCardList from './MoviesCardList/MoviesCardList';

function Movies() {
  return (
    <div className="movies">
      <section className="search-panel page_width_l">
        <div className="form-row">
          <SearchForm />
          <FilterCheckbox />
        </div>
      </section>
      <MoviesCardList />
    </div>
  );
}

export default Movies;
