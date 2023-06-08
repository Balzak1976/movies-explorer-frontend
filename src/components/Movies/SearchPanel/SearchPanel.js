import "./SearchPanel.css"
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchPanel() {
  return (
    <section className="search-panel">
        <div className="form-row">
          <SearchForm />
          <FilterCheckbox />
        </div>
      </section>
  )
}

export default SearchPanel