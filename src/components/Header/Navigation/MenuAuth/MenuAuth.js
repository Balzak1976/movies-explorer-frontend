import './MenuAuth.css';
import { Link } from 'react-router-dom';


function MenuAuth() {
  return (
    <nav className="menu-auth">
      <ul className="menu-auth__list reset-ul">
        <li>
          <Link to="/signup" className="menu-auth__link menu-auth__link_type_register">
            Регистрация
          </Link>
        </li>
        <li>
          <Link to="/signin" className="menu-auth__link menu-auth__link_type_login">
            Войти
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MenuAuth;
