import './Navigation.css';
import { Routes, Route } from 'react-router-dom';
import ProtectedRouteElement from '../../parts/ProtectedRoute';
import MenuAuth from './MenuAuth/MenuAuth';
import MenuProfile from './MenuProfile/MenuProfile';

function Navigation({ loggedIn }) {
  return (
    <div className="navigation">
      <Routes>
        <Route path="/" element={<MenuAuth />} />
        <Route path={'/movies'} element={<ProtectedRouteElement component={MenuProfile} loggedIn={loggedIn} />} />
        <Route path={'/saved-movies'} element={<ProtectedRouteElement component={MenuProfile} loggedIn={loggedIn} />} />
        <Route path={'/profile'} element={<ProtectedRouteElement component={MenuProfile} loggedIn={loggedIn} />} />
        <Route path="/signin" element={null} />
        <Route path="/signup" element={null} />
      </Routes>
    </div>
  );
}

export default Navigation;
