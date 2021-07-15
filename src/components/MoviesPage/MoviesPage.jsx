import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

function MoviesPage() {
  return (
    <div className='movies'>
      <Header>
          <Navigation />
      </Header>
      <main className='movies__main'>
          <SearchForm />
      </main>
      <Footer />
    </div>
  );
}

export default MoviesPage;