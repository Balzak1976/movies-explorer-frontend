import './App.css';
import { useEffect, useState, useCallback } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';
import {
  addAllMoviesToStorage,
  getAllMoviesFromStorage,
  addMovieSearchResultToStorage,
  getMovieSearchResultFromStorage,
  mixMoviesWithUniqueMovieId,
} from '../../utils/utils';
import filterMovies from '../../utils/filterMovies';
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

const USER_SUCCESS_MSG = 'данные успешно обновлены';
const USER_ERROR_MSG = 'Что-то пошло не так...';

function App() {
  // ============================ STATES =======================================

  const [loggedIn, setLoggedIn] = useState(false);

  const [isPreload, setIsPreload] = useState(false);
  const [infoToolTip, setInfoToolTip] = useState({});
  const [isBtnSubmitSaving, setBtnSubmitSaving] = useState(false);
  const [moviesError, setMoviesError] = useState({});

  const [searchResult, setSearchResult] = useState({});
  const [movies, setMovies] = useState([]);
  const [savedSearchResult, setSavedSearchResult] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);

  const [currentUser, setCurrentUser] = useState({});
  const [userInfoToolTip, setUserInfoToolTip] = useState({});

  // ============================ MOVIES =======================================

  const handleSearchMovies = (submitted) => {
    const isSavedMovies = submitted.isSavedMovies;
    const allMovies = getAllMoviesFromStorage();
    setInfoToolTip({ notFound: false });

    if (isSavedMovies === true) {
      const filtered = filterMovies(submitted, savedMovies);

      setSavedMovies([...filtered]);
      setInfoToolTip({ ...infoToolTip, notFound: filtered.length === 0 });

      addMovieSearchResultToStorage({
        searchData: searchResult,
        movies: movies,
        savedSearchData: submitted,
        savedMovies: filtered,
      });
    } else if (allMovies) {
      // console.log('данные с хранилища');
      const filtered = filterMovies(submitted.savedReq, allMovies);

      setMovies([...filtered]);
      setInfoToolTip({ ...infoToolTip, notFound: filtered.length === 0 });
      addMovieSearchResultToStorage({ searchData: submitted, movies: filtered });
    } else {
      // console.log('данные с сервера');
      setIsPreload(true);
      setMoviesError({ status: null, message: null });

      moviesApi
        .getAllMovies()
        .then((allMovies) => {
          const filtered = filterMovies(submitted, allMovies);

          setMovies([...filtered]);
          setInfoToolTip({ ...infoToolTip, notFound: filtered.length === 0 });

          addMovieSearchResultToStorage({
            searchData: submitted,
            movies: filtered,
            savedSearchData: savedSearchResult,
            savedMovies: savedMovies,
          });
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
        const message = err.message || USER_ERROR_MSG;

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
        const message = err.message || USER_ERROR_MSG;

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
    localStorage.removeItem('foundMovies');
    localStorage.removeItem('allMovies');
    navigate('/', { replace: true });
    setLoggedIn(false);
  };

  const handleUpdateUser = (userData) => {
    setBtnSubmitSaving(true);

    mainApi
      .updateUser(userData)
      .then((res) => {
        setCurrentUser(res);
        setUserInfoToolTip({ ...userInfoToolTip, isSuccess: true, message: USER_SUCCESS_MSG });
      })
      .catch((err) => {
        console.log(err);
        const message = err.message || USER_ERROR_MSG;

        setUserInfoToolTip({ ...userInfoToolTip, isError: true, message: message });
      })
      .finally(() => {
        setBtnSubmitSaving(false);
      });
  };

  const resetUserInfoToolTip = () => {
    setUserInfoToolTip();
  };

  // ======================= Initial  ==========================================

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    const { searchData = {}, movies = [], savedSearchData = {}, savedMovies = [] } = getMovieSearchResultFromStorage();

    if (jwt) {
      handleTokenCheck(jwt);
      handleGetSavedMovies();
      setSearchResult({ ...searchData });
      setMovies([...movies]);
      setSavedSearchResult({ ...savedSearchData });
      setSavedMovies([...savedMovies]);
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
                    searchData={searchResult}
                    dataMovies={mixMoviesWithUniqueMovieId(movies, savedMovies)}
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
                    searchData={savedSearchResult}
                    dataMovies={savedMovies}
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
