import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardsList({movies, savedMovieModificator}) {
  return (
    <section className='movies' aria-label='Карточки с фильмами'>
      <ul className='movies__list' id='movies-list'>
        {movies?.map((movie) => (
          <MoviesCard
            key={movie._id}
            card={movie}
            savedMovieModificator={savedMovieModificator}
          />
        ))}
      </ul>
      <button className={`movies__button movies__button${savedMovieModificator} hover_type_light-button`} type='button'>Ещё</button>
    </section>
  );
}

export default MoviesCardsList;
