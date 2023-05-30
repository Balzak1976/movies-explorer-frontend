import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../parts/Navigation/Navigation';
import './Header.css';

function Header({loggedIn}) {
  return (
    
    <header className="header page_width_l bg_blue">
      <Link to='/'>
        <img className="logo" src={logo} alt="логотип" />
      </Link>

      <Navigation/>
    </header>
  )
}

export default Header;