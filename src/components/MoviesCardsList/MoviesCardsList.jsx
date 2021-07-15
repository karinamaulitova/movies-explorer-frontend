import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import movies from './movies-mock';

function MoviesCardsList() {
  return (
    <section className='movies' aria-label='Карточки с фильмами'>
      <ul className='movies__list' id='movies-list'>
        {movies?.map((movie) => (
          <MoviesCard
            key={movie._id}
            card={movie}
          />
        ))}
      </ul>
      <button className='movies__button' type='button'>Ещё</button>
    </section>
  );
}

export default MoviesCardsList;
