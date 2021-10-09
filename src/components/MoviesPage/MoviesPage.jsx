import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardsList from '../MoviesCardsList/MoviesCardsList';
import { useMovies } from '../../utils/useMoviesHook';
import Preloader from '../Preloader/Preloader';
import { usePageSize } from '../../utils/usePageSizeHook';
import {PAGE_SIZE_CONFIG} from '../../utils/constants';


function MoviesPage({ loggedIn }) {
  const pageSize = usePageSize();

  const { initialSize, moreSize } = PAGE_SIZE_CONFIG[pageSize];

  const {
    movies,
    isLoading,
    isLoadingError,
    isNothingFound,
    loadMore,
    hasMore,
    filterText,
    setFilterText,
    setIsShortFilms,
    isShortFilms,
    saveMovieById,
    deleteMovieById,
  } = useMovies({ initialSize, moreSize });

  function handleFormSubmit({text}) {
    setFilterText(text);
  }

  return (
    <div className='movies-page'>
      <Header loggedIn={loggedIn} />
      <main className='movies-page__main'>
        <SearchForm
          initialValues={{ filterText }}
          isShortFilms={isShortFilms}
          setIsShortFilms={setIsShortFilms}
          onSubmit={handleFormSubmit}
          isDisabled={isLoading}
        />
        {isNothingFound ? (
          <p className='movies-page__error'>Ничего не найдено</p>
        ) : (
          ''
        )}
        {isLoadingError ? (
          <p className='movies-page__error'>
            Во время запроса произошла ошибка. Возможно, проблема с соединением
            или сервер недоступен. Подождите немного и попробуйте ещё раз
          </p>
        ) : (
          ''
        )}
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardsList
            movies={movies}
            isSavedMovie={false}
            onLoadMore={loadMore}
            hasMore={hasMore}
            onSaveMovie={saveMovieById}
            onDeleteMovie={deleteMovieById}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default MoviesPage;
