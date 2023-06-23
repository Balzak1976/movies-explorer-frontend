import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';
import {
  addAllMoviesToStorage,
  addMovieSearchResultToStorage,
  filterMovies,
  getAllMoviesFromStorage,
  mixMoviesWithUniqueMovieId,
} from '../../utils/utils';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import PageNotFound from '../PageNotFound/PageNotFound';
import PageWithFooter from '../PageWithFooter/PageWithFooter';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import ProtectedRouteElement from '../parts/ProtectedRoute';

function App() {
  // ============================ STATES =======================================

  const [loggedIn, setLoggedIn] = useState(false);
  const [isPreload, setIsPreload] = useState(false);
  const [infoToolTip, setInfoToolTip] = useState({});
  const [isBtnSubmitSaving, setBtnSubmitSaving] = useState(false);
  const [moviesError, setMoviesError] = useState({});
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [userError, setUserError] = useState({});

  // ============================ MOVIES =======================================

  const handleSearchMovies = (submitted) => {
    setInfoToolTip({ notFound: false });

    const allMovies = null && getAllMoviesFromStorage();

    if (allMovies) {
      const filtered = filterMovies(submitted.savedReq, allMovies);

      setMovies([...filtered]);
      setInfoToolTip({ ...infoToolTip, notFound: filtered.length === 0 });

      addMovieSearchResultToStorage(submitted, filtered);
    } else {
      setIsPreload(true);
      setMoviesError({ status: null, message: null });

      moviesApi
        .getAllMovies()
        .then((allMovies) => {
          const filtered = filterMovies(submitted.savedReq, allMovies);

          setMovies([...filtered]);
          setInfoToolTip({ ...infoToolTip, notFound: filtered.length === 0 });

          addMovieSearchResultToStorage(submitted, filtered);
          addAllMoviesToStorage(allMovies);
        })

        .catch((err) => {
          console.log(err);
          setMoviesError({ ...moviesError, status: err.status, message: true });
        })
        .finally(() => {
          setIsPreload(false);
        });
    }
  };

  const handleGetSavedMovies = () => {
    setIsPreload(true);
    setInfoToolTip({ notFound: false });
    setMoviesError({ status: null, message: null });

    mainApi
      .getMovies()
      .then((res) => {
        setSavedMovies(res);
      })
      .catch((err) => {
        console.log(err);
        setMoviesError({ ...moviesError, status: err.status, message: true });
      })
      .finally(() => {
        setIsPreload(false);
      });
  };

  const handleCardLike = (movieData) => {
    mainApi
      .saveMovie(movieData)
      .then((newMovie) => {
        setSavedMovies([...savedMovies, newMovie]);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  const handleCardDelete = (movieData) => {
    const mongoId = movieData._id;
    mainApi
      .deleteMovie(movieData)
      .then((res) => {
        setSavedMovies((state) => state.filter((c) => c._id !== mongoId));
      })

      .catch((err) => {
        console.log(err);
      });
  };

  const handleCardClick = (e) => {
    /* setSelectedCard({ cardLink: e.target.src, cardTitle: e.target.alt });
    setImagePopupOpen(true); */
  };

  // ============================= USER =======================================

  const navigate = useNavigate();

  const handleRegister = (userData) => {
    setBtnSubmitSaving(true);
    setUserError({ ...userError, isError: false });

    mainApi
      .register(userData)
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

  const handleLogin = (userData) => {
    setBtnSubmitSaving(true);
    setUserError({ ...userError, isError: false });

    return mainApi
      .authorize(userData)
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

  const handleUpdateUser = (userData) => {
    setBtnSubmitSaving(true);

    mainApi
      .updateUser(userData)
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

  // ======================= Initial  ===========================

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    // const savedSearchResult = getMovieSearchResultFromStorage();

    if (jwt) {
      handleTokenCheck(jwt);
      handleGetSavedMovies();
      // setMovies([...foundMovies]);
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
                <PageWithFooter loggedIn={loggedIn} isHidden={true}>
                  <ProtectedRouteElement
                    component={Movies}
                    onSearchForm={handleSearchMovies}
                    dataMovies={mixMoviesWithUniqueMovieId(movies, savedMovies)}
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
                <PageWithFooter loggedIn={loggedIn} isHidden={true}>
                  <ProtectedRouteElement
                    component={SavedMovies}
                    onSearchForm={handleSearchMovies}
                    dataMovies={savedMovies ?? []}
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
              element={<Login buttonSubmitState={isBtnSubmitSaving} onLogin={handleLogin} info={userError} />}
            />
            <Route
              path="/signup"
              element={<Register buttonSubmitState={isBtnSubmitSaving} onRegister={handleRegister} info={userError} />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
