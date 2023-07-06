import './SearchPanel.css';
import { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchPanel({ onSearchForm, searchData }) {
  const [checkedFilter, setCheckedFilter] = useState(false);

  const handelSearchForm = (value) => {
    onSearchForm({
      isShortMovies: checkedFilter,
      savedReq: value,
    });
  };

  useEffect(() => {
    setCheckedFilter(searchData?.isShortMovies);
  }, [searchData?.isShortMovies]);

  return (
    <div className="search-panel">
      <div className="form-row">
        <SearchForm onSearchForm={handelSearchForm} savedReq={searchData?.savedReq} />
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
