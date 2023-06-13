import { useState, useEffect } from 'react';
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
import { moviesApi } from '../../utils/MoviesApi';
import { addAllMoviesToStorage, filterMovies, getAllMoviesFromStorage } from '../../utils/utils';
import { MovieCard } from '../../utils/MovieCard';

function App() {
  // ============================ STATES =======================================

  const [loggedIn, setLoggedIn] = useState(true);
  const [isBtnSubmitSaving, setBtnSubmitSaving] = useState(false);
  const [dataMovies, setDataMovies] = useState([]);

  // ============================ MOVIES =======================================

  const handleRequestMovies = (submittedValue) => {
    setBtnSubmitSaving(true);

    moviesApi
      .getAllMovies()
      .then(addAllMoviesToStorage)
      .then(() => {
        const filtered = filterMovies(submittedValue, [...getAllMoviesFromStorage()]);
        const moviesCard = filtered.map((v) => new MovieCard(v));

        setDataMovies([...moviesCard]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setBtnSubmitSaving(false);
      });
  };

  const handleCardClick = (e) => {
    /* setSelectedCard({ cardLink: e.target.src, cardTitle: e.target.alt });
    setImagePopupOpen(true); */
  };

  const handleCardDelete = ({ cardId }) => {
    /* setBtnSubmitSaving(true);

    api.deleteCard(cardId)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== cardId));

        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setBtnSubmitSaving(false);
      }); */
  };

  const handleCardLike = ({ cardId, isLiked }) => {
    /* api.changeLikeCardStatus(cardId, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => (c._id === cardId ? newCard : c)));
      })
      .catch((err) => {
        console.log(err);
      }); */
  };

  // ======================= Initial Profile, Cards ===========================

  useEffect(() => {
    const jwt = true;

    if (jwt) {
      // movieApi
    }
  }, [loggedIn]);

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
              <PageWithFooter loggedIn={loggedIn} isHidden={true}>
                <ProtectedRouteElement
                  component={Movies}
                  onSearchForm={handleRequestMovies}
                  dataMovies={dataMovies}
                  onCardClick={handleCardClick}
                  onCardDelete={handleCardDelete}
                  onCardLike={handleCardLike}
                  loggedIn={loggedIn}
                />
              </PageWithFooter>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <PageWithFooter loggedIn={loggedIn} isHidden={true}>
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
