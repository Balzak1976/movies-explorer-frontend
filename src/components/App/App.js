import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageWithFooter from '../PageWithFooter/PageWithFooter';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ProtectedRouteElement from '../parts/ProtectedRoute';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  // ============================ STATES =======================================

  const [loggedIn, setLoggedIn] = useState(true);

  // ===========================================================================

  return (
    <div className="app">
      <div className="page">
        <Header loggedIn={loggedIn} />

        <Routes>
          <Route
            path="/"
            element={
              <PageWithFooter loggedIn={loggedIn}>
                <Main />
              </PageWithFooter>
            }
          />
          <Route
            path="/movies"
            element={
              <PageWithFooter loggedIn={loggedIn}>
                <ProtectedRouteElement component={Movies} loggedIn={loggedIn} />
              </PageWithFooter>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <PageWithFooter loggedIn={loggedIn}>
                <ProtectedRouteElement component={SavedMovies} loggedIn={loggedIn} />
              </PageWithFooter>
            }
          />
          <Route path="/profile" element={<ProtectedRouteElement component={Profile} loggedIn={loggedIn} />} />
          <Route
            path="/signin"
            element={
              <Login
              // buttonSubmitState={isBtnSubmitSaving}
              // onLogin={handleLogin}
              // info={infoToolTip}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <Register
              // buttonSubmitState={isBtnSubmitSaving}
              // onRegister={handleRegister}
              // info={infoToolTip}
              />
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
