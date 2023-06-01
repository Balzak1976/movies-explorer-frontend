import './Header.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import Navigation from './Navigation/Navigation';

function Header({ loggedIn }) {
  return (
    <header className="header page_width_l">
      <Link to="/">
        <img className="logo" src={logo} alt="логотип" />
      </Link>

      <Navigation loggedIn={loggedIn} />
    </header>
  );
}

export default Header;
