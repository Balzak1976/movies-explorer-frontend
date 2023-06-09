import './SearchForm.css';

function FilterCheckbox() {
  return (
    <form className="search-form">
      <label className="search-form__field">
        <div className="search-form__icon" />
        <input className="search-form__input" placeholder="Фильм" type="text" name="" />
      </label>
      <button className="search-form__submit" type="submit">
        <span className="search-form__submit-inner" />
      </button>
    </form>
  );
}

export default FilterCheckbox;
