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
import Preloader from '../Preloader/Preloader';
import * as auth from '../../utils/auth';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import MainApi from '../../utils/MainApi';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const history = useHistory();

  const handleLoggedIn = () => {
    setLoggedIn(true);
  };

  const handleLoggedOut = () => {
    setLoggedIn(false);
    history.replace('/');
  }

  useEffect(() => {
    setIsAuthChecked(false)
    auth
      .checkToken()
      .then(() => {
        setLoggedIn(true);
      })
      .catch(() => {
        setLoggedIn(false);
      }).finally(() => {
        setIsAuthChecked(true)
      });
  }, []);

  useEffect(() => {
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

  if(!isAuthChecked){
    return <div className='fullscreen-container'>
    <Preloader/>
    </div>
  }

  return (
    <CurrentUserContext.Provider value={{ ...currentUser }}>
      <Switch>
        <Route exact path='/'>
          <MainPage loggedIn={loggedIn} />
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
          onLoggedOut={handleLoggedOut}
          onCurrentUserDataChange={setCurrentUser}
        />
        <Route exact path='/signup'>
          <RegisterPage onRegister={handleLoggedIn} loggedIn={loggedIn} />
        </Route>
        <Route exact path='/signin'>
          <LoginPage onLoggedIn={handleLoggedIn} loggedIn={loggedIn} />
        </Route>
        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>
    </CurrentUserContext.Provider>
  );
}

export default App;
