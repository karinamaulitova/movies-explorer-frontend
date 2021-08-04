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
    isChecked,
    setIsChecked,
    deleteSavedMovieById,
  } = useSavedMovies();

  function handleFormSubmit({text, isChecked}) {
    setFilterText(text);
    setIsChecked(isChecked);
  }

  return (
    <div className='saved-movies-page'>
      <Header loggedIn={loggedIn} />
      <main className='saved-movies-page__main'>
        <SearchForm
          initialValues={{ filterText, isChecked }}
          onSubmit={handleFormSubmit}
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
