import './FilterCheckbox.css';

function FilterCheckbox({checked, onChange}) {
  return (
    <div className="filter">
      <label className="checkbox">
        <input className="checkbox__input" type="checkbox" checked={checked} onChange={onChange}/>
        <span className="checkbox__content">
          <span className="checkbox__switch" />
        </span>
        <span className="checkbox__text">Короткометражки</span>
      </label>
    </div>
  );
}

export default FilterCheckbox;
