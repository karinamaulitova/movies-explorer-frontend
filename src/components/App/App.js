import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import MainPage from '../MainPage/MainPage';
import MoviesPage from '../MoviesPage/MoviesPage';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProfilePage from '../ProfilePage/ProfilePage';
import RegisterPage from '../RegisterPage/RegisterPage';
import SavedMoviesPage from '../SavedMoviesPage/SavedMoviesPage';

function App() {
  return (
    <Switch>
    <Route exact path='/'>
      <MainPage />
    </Route>
    <Route exact path='/movies'>
      <MoviesPage />
    </Route>
    <Route exact path='/saved-movies'>
      <SavedMoviesPage />
    </Route>
    <Route exact path='/profile'>
      <ProfilePage />
    </Route>
    <Route exact path='/signup'>
      <RegisterPage />
    </Route>
    <Route exact path='/signin'>
      <LoginPage />
    </Route>
    <Route path='*'>
      <PageNotFound />
    </Route>
    </Switch>
  );
}

export default App;
