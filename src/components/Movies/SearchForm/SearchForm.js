import './SearchForm.css';
import { useFormAndValidation } from '../../../hooks/useFormAndValidation';

function FilterCheckbox({ onSearchForm }) {
  const { values, handleChange, errors, isValid } = useFormAndValidation();

  const onSubmit = (e) => {
    e.preventDefault();

    onSearchForm(values);
  };
  return (
    <form className="search-form" name={'search-form'} onSubmit={onSubmit} noValidate>
      <label className="search-form__field">
        <span className="search-form__icon" />
        <input
          value={values.movie ?? ''}
          onChange={handleChange}
          className="search-form__input"
          placeholder="Фильм"
          type="text"
          name="movie"
          required
        />
        <span className={`search-form__input-error ${errors && 'search-form__input-error_active'}`}>
          {errors.movie && "Нужно ввести ключевое слово"}
        </span>
      </label>
      <button
        className={`search-form__submit ${!isValid && 'search-form__submit_inactive'}`}
        type="submit"
        disabled={!isValid}>
        <span className="search-form__submit-inner" />
      </button>
    </form>
  );
}

export default FilterCheckbox;
