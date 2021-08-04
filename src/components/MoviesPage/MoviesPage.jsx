import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardsList from '../MoviesCardsList/MoviesCardsList';
import { useMovies } from '../../utils/useMoviesHook';
import Preloader from '../Preloader/Preloader';
import { usePageSize } from '../../utils/usePageSizeHook';

const pageSizeConfig = {
  s: { initialSize: 5, moreSize: 2 },
  m: { initialSize: 8, moreSize: 2 },
  l: { initialSize: 16, moreSize: 4 },
};

function MoviesPage({ loggedIn }) {
  const pageSize = usePageSize();

  const { initialSize, moreSize } = pageSizeConfig[pageSize];

  const {
    movies,
    isLoading,
    isLoadingError,
    isNothingFound,
    loadMore,
    hasMore,
    filterText,
    setFilterText,
    isChecked,
    setIsChecked,
    saveMovieById,
    deleteMovieById,
  } = useMovies({ initialSize, moreSize });

  function handleFormSubmit({text, isChecked}) {
    setFilterText(text);
    setIsChecked(isChecked);
  }

  return (
    <div className='movies-page'>
      <Header loggedIn={loggedIn} />
      <main className='movies-page__main'>
        <SearchForm
          initialValues={{ filterText, isChecked }}
          onSubmit={handleFormSubmit}
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
