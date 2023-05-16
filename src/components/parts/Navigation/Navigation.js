import './Navigation.css';
import { Link } from 'react-router-dom';
import { ROOT_URL } from '../../../utils/settings';

function Navigation() {
  return (
    <nav className="menu">
      <div className="menu-films">
        <Link to={`${ROOT_URL}films`} className="menu-films__link menu-films__link_type_burger">
          Главная
        </Link>
        <Link to={`${ROOT_URL}films`} className="menu-films__link">
          Фильмы
        </Link>
        <Link to={`${ROOT_URL}films`} className="menu-films__link">
          Сохраненные фильмы
        </Link>
      </div>

      <div className="menu-auth">
        <div className="menu-login">
          <Link to={`${ROOT_URL}films`} className="menu-login__link">
            Регистрация
          </Link>
          <button
            className="menu-login__btn"
            // onClick={handelBtnBurgerClick}
            type="button"
            aria-label="переход на страницу авторизации"
          ></button>
        </div>
        <div className="menu-profile">
          <Link to={`${ROOT_URL}films`} className="menu-profile__link">
            Аккаунт
          </Link>
          <button
            className="menu-profile__btn"
            // onClick={handelBtnBurgerClick}
            type="button"
            aria-label="кнопка выхода из профиля"
          ></button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
