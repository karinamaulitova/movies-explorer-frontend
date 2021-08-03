import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardsList from '../MoviesCardsList/MoviesCardsList';
import movies from '../../utils/movies-mock';

function MoviesPage({ loggedIn }) {
  return (
    <div className='movies-page'>
      <Header loggedIn={loggedIn} />
      <main className='movies-page__main'>
        <SearchForm />
        <MoviesCardsList movies={movies} isSavedMovie={false} />
      </main>
      <Footer />
    </div>
  );
}

export default MoviesPage;
