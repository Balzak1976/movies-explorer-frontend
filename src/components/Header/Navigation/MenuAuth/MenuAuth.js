import './MenuAuth.css';
import { Link } from 'react-router-dom';
import Logo from '../../Logo/Logo';

function MenuAuth() {
  return (
    <nav className="menu-auth">
      <Logo/>
      <ul className="menu-auth__list reset-ul">
        <li>
          <Link to="/signin" className="menu-auth__link menu-auth__link_type_register">
            Регистрация
          </Link>
        </li>
        <li>
          <Link to="/signup" className="menu-auth__link menu-auth__link_type_login">
            Войти
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MenuAuth;
