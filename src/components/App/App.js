import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useLimitedRenderCards } from '../../hooks/useLimitedRenderCards';

import { DATA_UPDATE_SUCCESS_MSG } from '../../constants/infoToolTipMessage';
import { NO_MOVIES } from '../../constants/movieCard';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';
import { filterMovies, mixMoviesWithUniqueMovieId } from '../../utils/movieCardUtils';

import { handleServerErrors } from '../../utils/handleServerErrors';
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
import { useLocalStorage } from '../../hooks/useLocalStorage';

function App() {
  // ============================ STATES =======================================

  const [loggedIn, setLoggedIn] = useLocalStorage(false, 'loggedIn');

  const [isPreload, setIsPreload] = useState(false);
  const [infoMovies, setInfoMovies] = useState({});
  const [isBtnSubmitSaving, setBtnSubmitSaving] = useState(false);
  const [moviesError, setMoviesError] = useState({});
  const [savedMoviesError, setSavedMoviesError] = useState({});

  const [allMovies, setAllMovies] = useLocalStorage(null, 'allMovies');
  const [setMovies, limitedNumberOfMovies, isNextPageBtn, handelAddNextCards] = useLimitedRenderCards();
  const [searchResult, setSearchResult] = useLocalStorage({}, 'movies');
  const [savedMovies, setSavedMovies] = useState([]);

  const [currentUser, setCurrentUser] = useState({});
  const [userInfoToolTip, setUserInfoToolTip] = useState({});

  // ============================ MOVIES =======================================

  const handleSearchMovies = (submitted) => {
    setInfoMovies({ notFound: false });

    if (allMovies) {
      // console.log('данные с хранилища');
      const filtered = filterMovies(submitted, allMovies);

      setMovies([...filtered]);

      setSearchResult({ localMovies: filtered, localSearchData: submitted });

      setInfoMovies({ ...infoMovies, notFound: filtered.length === NO_MOVIES });
    } else {
      // console.log('данные с сервера');
      setIsPreload(true);
      setMoviesError({ status: null, message: null });

      moviesApi
        .getAllMovies()
        .then((allMovies) => {
          const filtered = filterMovies(submitted, allMovies);

          setMovies([...filtered]);
          setSearchResult(submitted);

          setSearchResult({ localMovies: filtered, localSearchData: submitted });
          setAllMovies(allMovies);

          setInfoMovies({ ...infoMovies, notFound: filtered.length === NO_MOVIES });
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
    setMoviesError({ status: null, message: null });

    mainApi
      .getMovies()
      .then((res) => {
        setSavedMovies(res);
      })
      .catch((err) => {
        console.log(err);

        setSavedMoviesError({ ...savedMoviesError, status: err.status, message: true });
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
      .catch(console.log);
  };

  const handleCardDelete = (movieData) => {
    const mongoId = movieData._id;
    mainApi
      .deleteMovie(movieData)
      .then((res) => {
        setSavedMovies((state) => state.filter((c) => c._id !== mongoId));
      })
      .catch(console.log);
  };

  // ============================= USER =======================================

  const navigate = useNavigate();

  const handleRegister = (userData) => {
    setBtnSubmitSaving(true);
    setUserInfoToolTip({ ...userInfoToolTip, isError: false });

    mainApi
      .register(userData)
      .then(() => {
        delete userData.name;
        handleLogin(userData);
      })
      .catch((err) => {
        console.log(err);
        const message = handleServerErrors(err);

        setUserInfoToolTip({ ...userInfoToolTip, isError: true, message: message });
      })
      .finally(() => {
        setBtnSubmitSaving(false);
      });
  };

  const handleLogin = ({ email, password }) => {
    setBtnSubmitSaving(true);
    setUserInfoToolTip({ ...userInfoToolTip, isError: false });

    return mainApi
      .authorize({ email, password })
      .then((data) => {
        if (data?.token) {
          localStorage.setItem('jwt', data.token);
          setLoggedIn(true);
          navigate('/movies', { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
        const message = handleServerErrors(err);

        setUserInfoToolTip({ ...userInfoToolTip, isError: true, message: message });
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
        }
      })
      .catch(console.log);
  };

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('allMovies');
    localStorage.removeItem('movies');
    localStorage.removeItem('savedMovies');
    localStorage.removeItem('loggedIn');
    setLoggedIn(false);
    setCurrentUser({});
    setSearchResult({});
    navigate('/', { replace: true });
  };

  const handleUpdateUser = (userData) => {
    setBtnSubmitSaving(true);

    mainApi
      .updateUser(userData)
      .then((res) => {
        setCurrentUser(res);
        setUserInfoToolTip({ ...userInfoToolTip, isSuccess: true, message: DATA_UPDATE_SUCCESS_MSG });
      })
      .catch((err) => {
        console.log(err);
        const message = handleServerErrors(err);

        setUserInfoToolTip({ ...userInfoToolTip, isError: true, message: message });
      })
      .finally(() => {
        setBtnSubmitSaving(false);
      });
  };

  const resetUserInfoToolTip = () => {
    setUserInfoToolTip();
  };

  // ======================= START  ==========================================

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      const { localMovies = [] } = searchResult;

      handleTokenCheck(jwt);
      handleGetSavedMovies(); // savedMovies from movies-explorer-api
      setMovies([...localMovies]);
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
                    searchData={searchResult.localSearchData}
                    dataMovies={mixMoviesWithUniqueMovieId(limitedNumberOfMovies, savedMovies)}
                    onCardDelete={handleCardDelete}
                    onCardLike={handleCardLike}
                    isPreload={isPreload}
                    infoToolTip={infoMovies}
                    error={moviesError}
                    onAddNextCards={handelAddNextCards}
                    isNextPageBtn={isNextPageBtn}
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
                    onGetSavedMovies={handleGetSavedMovies}
                    savedMovies={savedMovies}
                    onCardDelete={handleCardDelete}
                    onCardLike={handleCardLike}
                    isPreload={isPreload}
                    error={savedMoviesError}
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
                  info={userInfoToolTip}
                  onResetInfo={resetUserInfoToolTip}
                  loggedIn={loggedIn}
                />
              }
            />
            {!loggedIn && (
              <Route
                path="/signin"
                element={
                  <Login
                    buttonSubmitState={isBtnSubmitSaving}
                    onLogin={handleLogin}
                    info={userInfoToolTip}
                    onResetInfo={resetUserInfoToolTip}
                  />
                }
              />
            )}
            {!loggedIn && (
              <Route
                path="/signup"
                element={
                  <Register
                    buttonSubmitState={isBtnSubmitSaving}
                    onRegister={handleRegister}
                    info={userInfoToolTip}
                    onResetInfo={resetUserInfoToolTip}
                  />
                }
              />
            )}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
