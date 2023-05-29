import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className="filter">
      <label className="checkbox">
        <input
          className="checkbox__input"
          type="checkbox"
          name="filter"
        />
        <div className="checkbox__content">
          <div className="checkbox__switch"/>
        </div>
        <div className="checkbox__text">Короткометражки</div>
      </label>
    </div>
  );
}

export default FilterCheckbox;
