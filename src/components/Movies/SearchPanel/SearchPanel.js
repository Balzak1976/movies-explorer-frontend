import './SearchPanel.css';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchPanel({onSearchForm}) {
  return (
    <div className="search-panel">
      <div className="form-row">
        <SearchForm onSearchForm={onSearchForm}/>
        <FilterCheckbox />
      </div>
    </div>
  );
}

export default SearchPanel;
