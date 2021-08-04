import React from 'react';

function MoviesCard({ card, isSavedMovie, onSave, onDelete, onSavedDelete }) {
  const {
    image,
    nameRU,
    duration,
    trailerLink,
    saved
  } = card;

  const imageUrl = typeof(image) === 'string' ? image :`https://api.nomoreparties.co${image.url}`
  const hoursDuration = Math.floor(duration / 60);
  const minutesDuration = duration % 60;
  const durationString = `${hoursDuration}ч ${minutesDuration}м`;

  const movieLikeButtonClassName = `movie__like-button ${
    saved ? 'movie__like-button_active' : ''
  }`;
  return (
    <li className='movie'>
      <a className='movie__trailer-link' href={trailerLink}>
      <img className='movie__photo' src={imageUrl} alt={nameRU} />
      </a>
      <div className='movie__name-container'>
        <h2 className='movie__name'>{nameRU}</h2>
        {isSavedMovie ? (
          <button
            className='movie__delete-button'
            type='button'
            onClick={onSavedDelete}
          />
        ) : (
          <button
            className={movieLikeButtonClassName}
            type='button'
            onClick={saved ? onDelete : onSave }
          />
        )}
      </div>
      <p className='movie__duration'>{durationString}</p>
    </li>
  );
}

export default MoviesCard;
