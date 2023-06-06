import './Header.css';
import Navigation from './Navigation/Navigation';

function Header({ loggedIn }) {
  return (
    <header className="header edge-padding">
      <Navigation loggedIn={loggedIn} />
    </header>
  );
}

export default Header;
