import './Header.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';

function Header({ loggedIn }) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <header className="header header_bg_blue page_width_l">
            <Navigation loggedIn={loggedIn}/>
          </header>
        }
      />
      <Route
        path="*"
        element={
          <header className="header page_width_l">
            <Navigation loggedIn={loggedIn}/>
          </header>
        }
      />
    </Routes>
  );
}

export default Header;
