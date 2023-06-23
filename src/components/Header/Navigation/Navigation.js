import './Navigation.css';
import { Routes, Route } from 'react-router-dom';
import ProtectedRouteElement from '../../parts/ProtectedRoute';
import MenuAuth from '../MenuAuth/MenuAuth';
import BtnBurgerWithMenuProfile from '../BtnBurgerWithMenuProfile/BtnBurgerWithMenuProfile';
import Logo from '../Logo/Logo';

function Navigation({ loggedIn }) {
  return (
    <div className="navigation">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Logo />
              {loggedIn ? (
                <div className="navigation__menu">
                  <ProtectedRouteElement component={BtnBurgerWithMenuProfile} loggedIn={loggedIn} />
                </div>
              ) : (
                <MenuAuth />
              )}
            </>
          }
        />
        <Route path={'/movies'} element={<>
          <Logo /><ProtectedRouteElement component={BtnBurgerWithMenuProfile} loggedIn={loggedIn} />
        </>} />
        <Route path={'/saved-movies'} element={<>
          <Logo /><ProtectedRouteElement component={BtnBurgerWithMenuProfile} loggedIn={loggedIn} />
        </>} />
        <Route path={'/profile'} element={<>
          <Logo /><ProtectedRouteElement component={BtnBurgerWithMenuProfile} loggedIn={loggedIn} />
        </>} />
        <Route path="*" element={null} />
      </Routes>
    </div>
  );
}

export default Navigation;
