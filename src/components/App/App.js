import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import MainPage from '../MainPage/MainPage';
import MoviesPage from '../MoviesPage/MoviesPage';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProfilePage from '../ProfilePage/ProfilePage';
import RegisterPage from '../RegisterPage/RegisterPage';
import SavedMoviesPage from '../SavedMoviesPage/SavedMoviesPage';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import * as auth from '../../utils/auth';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import MainApi from '../../utils/MainApi';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const history = useHistory();

  const handleLoggedIn = () => {
    setLoggedIn(true);
    history.replace('/movies');
  };

  const handleRegister = () => {
    history.replace('/signin');
  };

  useEffect(() => {
    auth
      .checkToken()
      .then(() => {
        setLoggedIn(true);
        history.replace('/movies');
      })
      .catch(() => {
        setLoggedIn(false);
      });
  }, [history, loggedIn]);

  React.useEffect(() => {
    if (loggedIn) {
      MainApi.getUserInfo()
        .then((data) => {
          setCurrentUser(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={{ ...currentUser }}>
      <Switch>
        <Route exact path='/'>
          <MainPage />
        </Route>
        <ProtectedRoute
          exact
          path='/movies'
          loggedIn={loggedIn}
          component={MoviesPage}
        />
        <ProtectedRoute
          exact
          path='/saved-movies'
          loggedIn={loggedIn}
          component={SavedMoviesPage}
        />
        <ProtectedRoute
          exact
          path='/profile'
          loggedIn={loggedIn}
          component={ProfilePage}
        />
        <Route exact path='/signup'>
          <RegisterPage onRegister={handleRegister} />
        </Route>
        <Route exact path='/signin'>
          <LoginPage onLoggedIn={handleLoggedIn} />
        </Route>
        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>
    </CurrentUserContext.Provider>
  );
}

export default App;
