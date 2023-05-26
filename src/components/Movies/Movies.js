import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

function Movies() {
  return (
    <div className="movies">
      <section className="search-panel page_width_l">
        <div className="form-wrapper">
          <SearchForm />
          {/* <FilterCheckbox /> */}
        </div>
      </section>
    </div>
  );
}

export default Movies;
