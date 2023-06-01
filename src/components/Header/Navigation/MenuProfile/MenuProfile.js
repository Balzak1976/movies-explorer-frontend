import './MenuProfile.css';
import { NavLink } from 'react-router-dom';

function MenuProfile() {
  return (
    <nav className="menu-profile">
      <ul className="menu-profile__list reset-ul">
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
            Сохраненные фильмы
          </NavLink>
        </li>
        <li>
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
