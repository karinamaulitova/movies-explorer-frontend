import React from 'react';

function MoviesCard({ card: { image, name, duration }, savedMovieModificator }) {
  return (
    <li className='movie'>
      <img className='movie__photo' src={image} alt={name} />
      <div className='movie__name-container'>
        <h2 className='movie__name'>{name}</h2>
        <button className={`movie__like-button movie__like-button${savedMovieModificator}`} type='button'></button>
      </div>
      <p className='movie__duration'>{duration}</p>
    </li>
  );
}

export default MoviesCard;
