import './App.css';
import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';


import HeaderWithFooter from '../HeaderWithFooter/HeaderWithFooter';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Login from '../auth/Login/Login';
import Register from '../auth/Register/Register';
import ProtectedRouteElement from '../parts/ProtectedRoute';

function App() {
  // ============================ STATES =======================================

  const [loggedIn, setLoggedIn] = useState(true);

  // ===========================================================================

  return (
    <div className="app">
      <div className="page">
        <Routes>
          <Route
            path="/"
            element={
              <HeaderWithFooter loggedIn={loggedIn}>
                <Main />
              </HeaderWithFooter>
            }
          />
          <Route
            path="/movies"
            element={
              <HeaderWithFooter loggedIn={loggedIn}>
                <ProtectedRouteElement
                  component={Movies}
                  loggedIn={loggedIn}
                />
              </HeaderWithFooter>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <HeaderWithFooter loggedIn={loggedIn}>
                <ProtectedRouteElement
                  // component={SavedMovies}
                  loggedIn={loggedIn}
                />
              </HeaderWithFooter>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRouteElement
                // component={Profile}
                loggedIn={loggedIn}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <Login
              // config={authConfig.login}
              // buttonSubmitState={isBtnSubmitSaving}
              // onLogin={handleLogin}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <Register
              // config={authConfig.register}
              // buttonSubmitState={isBtnSubmitSaving}
              // onRegister={handleRegister}
              />
            }
          />
          <Route
            path="*"
            element={<Navigate to="/" />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
