import './Header.css';
import Navigation from './Navigation/Navigation';

function Header({ loggedIn }) {
  return (
    <header className="header page_width_l">
      <Navigation loggedIn={loggedIn} />
    </header>
  );
}

export default Header;
