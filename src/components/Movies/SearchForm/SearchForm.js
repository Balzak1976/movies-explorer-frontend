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
        className="form__submit form__submit_type_search-movie"
        type="submit"
      />
    </form>
  );
}

export default FilterCheckbox;
