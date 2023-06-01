import './SearchForm.css';

function FilterCheckbox() {
  return (
    <form className="form form_type_search-movie">
      <div className="form__search-icon" />
      <input
        className="form__input form__input_type_search-movie"
        placeholder="Фильм"
        type="text"
        name=""
      />
      <button
        className="form__submit"
        type="submit"><span className="form__submit-inner"/></button>
    </form>
  );
}

export default FilterCheckbox;
