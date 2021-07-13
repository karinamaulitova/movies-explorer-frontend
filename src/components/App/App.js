import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';

function App() {
  return (
    <Route exact path='/'>
      <MainPage />
    </Route>
  );
}

export default App;
