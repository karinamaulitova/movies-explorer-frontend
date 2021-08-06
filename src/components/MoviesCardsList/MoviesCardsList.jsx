import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardsList({ movies, savedMovieModificator, isSavedMovie, onLoadMore, hasMore, onSaveMovie, onDeleteMovie, onDeleteSavedMovie }) {


  return (
    <section className='movies' aria-label='Карточки с фильмами'>
      <ul className='movies__list' id='movies-list'>
        {movies?.map((movie) => (
          <MoviesCard
            key={movie.id}
            card={movie}
            savedMovieModificator={savedMovieModificator}
            isSavedMovie={isSavedMovie}
            onSave={onSaveMovie}
            onDelete={onDeleteMovie}
            onSavedDelete={onDeleteSavedMovie}
          />
        ))}
      </ul>
      {hasMore && <button
        onClick={onLoadMore}
        className={`movies__button movies__button${savedMovieModificator} hover_type_light-button`}
        type='button'
      >
        Ещё
      </button>}
    </section>
  );
}

export default MoviesCardsList;
