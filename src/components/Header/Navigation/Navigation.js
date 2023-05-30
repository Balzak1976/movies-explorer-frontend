import './Navigation.css';
import logo from '../../../images/logo.svg';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className="menu">
      <Link to="/" className="menu__logo">
        <img className="logo" src={logo} alt="логотип" />
      </Link>
      {/* <ul className="menu-films">
        <li>
          <Link to="/movies" className="menu-films__link menu-films__link_active">
            Фильмы
          </Link>
        </li>
        <li>
          <Link to="/saved-movies" className="menu-films__link">
            Сохраненные фильмы
          </Link>
        </li>
      </ul> */}

      <nav className="menu-auth">
        <ul className="menu-auth__list reset-ul">
          <li>
            <Link to="/signin" className="menu-auth__link menu-auth__link_type_register reset-a">
              Регистрация
            </Link>
          </li>
          <li>
            <Link to="/signup" className="menu-auth__link menu-auth__link_type_login reset-a">
              Войти
            </Link>
          </li>
          {/* <li>
            <Link to="/profile" className="menu-auth__link menu-auth__link_type_profile">
              Аккаунт
              <span className="menu-auth__icon" />
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
