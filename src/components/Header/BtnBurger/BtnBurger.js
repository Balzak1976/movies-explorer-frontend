import './BtnBurger.css';

function BtnBurger({classMix, onClick, isOpen }) {
  return (
    <button
      className={`btn-burger ${classMix}`}
      onClick={onClick}
      type="button"
      aria-label="управление отображением меню профиля">
      <span className={`btn-burger__inner ${isOpen && 'btn-burger__inner_active'}`} />
    </button>
  );
}

export default BtnBurger;
