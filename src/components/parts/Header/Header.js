import './Header.css';
import { Link } from 'react-router-dom';
import { ROOT_URL } from '../../../utils/settings';
import Navigation from '../Navigation/Navigation';
import logo from '../../../images/logo.svg';

function Header() {
  return (
    <header className="header">
      <Link to={ROOT_URL}>
        <img className="logo" src={logo} alt="логотип" />
      </Link>

      <Navigation/>
    </header>
  )
}

export default Header;