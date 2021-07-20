import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardsList from '../MoviesCardsList/MoviesCardsList';
import savedMovies from '../../utils/saved-movies-mock';

function SavedMoviesPage() {


  return (
    <div className='saved-movies-page'>
      <Header>
          <Navigation />
      </Header>
      <main className='saved-movies-page__main'>
      <SearchForm />
          <MoviesCardsList isSavedMovie={true} movies={savedMovies} savedMovieModificator='_type_saved'/>
      </main>
      <Footer />
    </div>
  );
}

export default SavedMoviesPage;