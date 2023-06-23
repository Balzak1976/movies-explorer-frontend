import './SearchPanel.css';
import { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchPanel({ onSearchForm, searchData: { isShortMovies, savedReq }, isSavedMovies }) {
  const [checkedFilter, setCheckedFilter] = useState(isShortMovies);

  const handelSearchForm = (value) => {
    onSearchForm({
      isShortMovies: checkedFilter,
      savedReq: value,
      isSavedMovies: isSavedMovies,
    });
  };

  return (
    <div className="search-panel">
      <div className="form-row">
        <SearchForm onSearchForm={handelSearchForm} savedReq={savedReq} />
        <FilterCheckbox
          checked={checkedFilter}
          onChange={() => {
            setCheckedFilter(!checkedFilter);
          }}
        />
      </div>
    </div>
  );
}

export default SearchPanel;
