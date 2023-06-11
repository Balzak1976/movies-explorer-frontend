import './Header.css';
import Navigation from './Navigation/Navigation';

function Header({ loggedIn }) {
  return (
    <header className="header">
      <Navigation loggedIn={loggedIn} />
    </header>
  );
}

export default Header;
