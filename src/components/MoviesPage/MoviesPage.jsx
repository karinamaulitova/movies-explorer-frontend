import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardsList from '../MoviesCardsList/MoviesCardsList';

function MoviesPage() {


  return (
    <div className='movies-page'>
      <Header>
          <Navigation />
      </Header>
      <main className='movies-page__main'>
          <SearchForm />
          <MoviesCardsList />
      </main>
      <Footer />
    </div>
  );
}

export default MoviesPage;