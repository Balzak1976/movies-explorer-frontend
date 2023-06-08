import './MenuProfile.css';
import { NavLink } from 'react-router-dom';

function MenuProfile({ isOpen }) {
  return (
    <nav className={`menu-profile ${isOpen && 'menu-profile_type_burger'}`}>
      <h3 className={`menu-profile__title ${isOpen && 'menu-profile__title_type_burger'}`}>Главная</h3>

      <ul className={`menu-profile__list reset-ul`}>
        <li>
          <NavLink
            to="/movies"
            className={({ isActive }) => `menu-profile__link ${isActive ? 'menu-profile__link_active' : ''}`}>
            Фильмы
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) => `menu-profile__link ${isActive ? 'menu-profile__link_active' : ''}`}>
            Сохранённые фильмы
          </NavLink>
        </li>
        <li className="menu-profile__item menu-profile__item_type_profile">
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `menu-profile__link menu-profile__link_type_profile ${isActive ? 'menu-profile__link_active' : ''}`
            }>
            Аккаунт
            <span className="menu-profile__icon" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MenuProfile;
