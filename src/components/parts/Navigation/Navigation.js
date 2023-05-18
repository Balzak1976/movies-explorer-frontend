import './Navigation.css';
import { Link } from 'react-router-dom';
import { ROOT_URL } from '../../../utils/settings';

function Navigation() {
  return (
    <nav className="menu">
      <ul className="menu-films">
        {/* <li>
          <Link to={`${ROOT_URL}films`} className="menu-films__link menu-films__link_type_burger">
            Главная
          </Link>
        </li> */}
        <li>
          <Link to={`${ROOT_URL}films`} className="menu-films__link menu-films__link_active">
            Фильмы
          </Link>
        </li>
        <li>
          <Link to={`${ROOT_URL}films`} className="menu-films__link">
            Сохраненные фильмы
          </Link>
        </li>
      </ul>

      <nav className="menu-auth">
        {/* <div className="menu-login">
          <Link to={`${ROOT_URL}films`} className="menu-login__link">
            Регистрация
          </Link>
          <button
            className="menu-login__btn"
            // onClick={handelBtnBurgerClick}
            type="button"
            aria-label="переход на страницу авторизации"
          >Войти</button>
        </div> */}
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
      </nav>
    </nav>
  );
}

export default Navigation;
