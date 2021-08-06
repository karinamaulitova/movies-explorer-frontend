import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardsList from '../MoviesCardsList/MoviesCardsList';
import { useSavedMovies } from '../../utils/useSavedMoviesHook';

function SavedMoviesPage({ loggedIn }) {
  const {
    movies,
    isNothingFound,
    filterText,
    setFilterText,
    isShortFilms,
    setIsShortFilms,
    deleteSavedMovieById,
  } = useSavedMovies();

  function handleFormSubmit({text}) {
    setFilterText(text);
  }

  return (
    <div className='saved-movies-page'>
      <Header loggedIn={loggedIn} />
      <main className='saved-movies-page__main'>
        <SearchForm
          initialValues={{ filterText}}
          onSubmit={handleFormSubmit}
          isShortFilms={isShortFilms}
          setIsShortFilms={setIsShortFilms}
        />
         {isNothingFound ? (
          <p className='saved-movies-page__error'>Ничего не найдено</p>
        ) : (
          ''
        )}
        <MoviesCardsList
          isSavedMovie={true}
          savedMovieModificator='_type_saved'
          movies={movies}
          onDeleteSavedMovie={deleteSavedMovieById}
        />
      </main>
      <Footer />
    </div>
  );
}

export default SavedMoviesPage;
