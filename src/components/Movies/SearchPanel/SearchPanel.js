import './SearchPanel.css';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchPanel() {
  return (
    <div className="search-panel">
      <div className="form-row">
        <SearchForm />
        <FilterCheckbox />
      </div>
    </div>
  );
}

export default SearchPanel;
