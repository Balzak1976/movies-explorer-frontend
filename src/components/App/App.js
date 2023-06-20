import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

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
import {
  addAllMoviesToStorage,
  addMovieSearchResultToStorage,
  filterMovies,
  getAllMoviesFromStorage,
} from '../../utils/utils';
import { MovieCard } from '../../utils/MovieCard';
import { mainApi } from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  // ============================ STATES =======================================
  // const [infoToolTip, setInfoToolTip] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [isPreload, setIsPreload] = useState(false);
  const [infoToolTip, setInfoToolTip] = useState({});
  const [moviesError, setMoviesError] = useState({});
  const [movies, setMovies] = useState([]);
  const [userMovies, setUserMovies] = useState([]);
  const [isBtnSubmitSaving, setBtnSubmitSaving] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [userError, setUserError] = useState({});

  // ============================ MOVIES =======================================

  const handleSearchMovies = (submitted) => {
    setIsPreload(true);
    setInfoToolTip({ notFound: false });
    setMoviesError({ status: null, message: null });

    moviesApi
      .getAllMovies()
      .then(addAllMoviesToStorage)
      .then(() => {
        const filtered = filterMovies(submitted.savedReq, [...getAllMoviesFromStorage()]);
        addMovieSearchResultToStorage(submitted, filtered);

        setMovies([...filtered]);
        setInfoToolTip({ ...infoToolTip, notFound: filtered.length === 0 });
      })
      .catch((err) => {
        console.log(err);
        setMoviesError({ ...moviesError, status: err.status, message: true });
      })
      .finally(() => {
        setIsPreload(false);
      });
  };

  const handleGetUserMovies = () => {
    mainApi
      .getMovies()
      .then((res) => { 
        setUserMovies(res)
       })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCardLike = (movie) => {
    console.log('movie: ', movie);
    mainApi.saveMovie(movie)
      .then((newCard) => {
        setUserMovies([...userMovies, {...newCard, isLiked: true}]);
      })
      .catch((err) => {
        console.log(err);
      });
    };
    
    console.log('userMovies: ', userMovies);
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

  
  // ============================= USER =======================================

  const navigate = useNavigate();

  const handleRegister = (options) => {
    setBtnSubmitSaving(true);
    setUserError({ ...userError, isError: false });

    mainApi
      .register(options)
      .then(() => {
        navigate('/movies', { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setUserError({ ...userError, isError: true });
      })
      .finally(() => {
        setBtnSubmitSaving(false);
      });
  };

  const handleLogin = (options) => {
    setBtnSubmitSaving(true);
    setUserError({ ...userError, isError: false });

    return mainApi
      .authorize(options)
      .then((data) => {
        if (data?.token) {
          localStorage.setItem('jwt', data.token);
          setLoggedIn(true);
          navigate('/movies', { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
        setUserError({ ...userError, isError: true });
      })
      .finally(() => {
        setBtnSubmitSaving(false);
      });
  };

  const handleTokenCheck = (jwt) => {
    mainApi
      .checkToken(jwt)
      .then((data) => {
        if (data) {
          setCurrentUser({ ...currentUser, name: data?.name, email: data?.email });
          setLoggedIn(true);
          navigate('/movies', { replace: true });
        }
      })
      .catch((err) => console.log(err));
  };

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    navigate('/signin', { replace: true });
    setLoggedIn(false);
  };

  const handleUpdateUser = (options) => {
    setBtnSubmitSaving(true);

    mainApi
      .updateUser(options)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
        setUserError({ ...userError, isError: true });
      })
      .finally(() => {
        setBtnSubmitSaving(false);
      });
  };

  // ======================= Initial Profile, Cards ===========================

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      handleTokenCheck(jwt);
      handleGetUserMovies();
    }
  }, [loggedIn]);

  // ===========================================================================

  return (
    <div className="app">
      <div className="page">
        <Header loggedIn={loggedIn} />
        <CurrentUserContext.Provider value={currentUser}>
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
                <PageWithFooter
                  loggedIn={loggedIn}
                  isHidden={true}>
                  <ProtectedRouteElement
                    component={Movies}
                    onSearchForm={handleSearchMovies}
                    dataMovies={movies}
                    onCardClick={handleCardClick}
                    onCardDelete={handleCardDelete}
                    onCardLike={handleCardLike}
                    isPreload={isPreload}
                    infoToolTip={infoToolTip}
                    error={moviesError}
                    loggedIn={loggedIn}
                  />
                </PageWithFooter>
              }
            />
            <Route
              path="/saved-movies"
              element={
                <PageWithFooter
                  loggedIn={loggedIn}
                  isHidden={true}>
                  <ProtectedRouteElement
                    component={SavedMovies}
                    onSearchForm={handleSearchMovies}
                    dataMovies={userMovies}
                    onCardClick={handleCardClick}
                    onCardDelete={handleCardDelete}
                    onCardLike={handleCardLike}
                    isPreload={isPreload}
                    infoToolTip={infoToolTip}
                    error={moviesError}
                    loggedIn={loggedIn}
                  />
                </PageWithFooter>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRouteElement
                  component={Profile}
                  buttonSubmitState={isBtnSubmitSaving}
                  onUpdateUser={handleUpdateUser}
                  onLogout={handleLogout}
                  info={userError}
                  loggedIn={loggedIn}
                />
              }
            />
            <Route
              path="/signin"
              element={
                <Login
                  buttonSubmitState={isBtnSubmitSaving}
                  onLogin={handleLogin}
                  info={userError}
                />
              }
            />
            <Route
              path="/signup"
              element={
                <Register
                  buttonSubmitState={isBtnSubmitSaving}
                  onRegister={handleRegister}
                  info={userError}
                />
              }
            />
            <Route
              path="*"
              element={<PageNotFound />}
            />
          </Routes>
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
