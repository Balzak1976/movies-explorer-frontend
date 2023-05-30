import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
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
        <Header
          loggedIn={loggedIn}
          // userData={email}
          // onSignOut={handleSignOut}
        />

        <Routes>
          <Route
            path="/"
            element={<Main />}
          />
          <Route
            path="/movies"
            element={
              <ProtectedRouteElement
                component={Movies}
                loggedIn={loggedIn}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRouteElement
                // component={SavedMovies}
                loggedIn={loggedIn}
              />
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

        <Footer />
      </div>
    </div>
  );
}

export default App;
