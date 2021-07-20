import React, { useState } from 'react';

function MoviesCard({ card: { image, name, duration }, isSavedMovie }) {
  const [isLiked, setIsLiked] = useState(false);

  function handleLikeCLick() {
    setIsLiked((liked) => !liked);
  }

  const movieLikeButtonClassName = `movie__like-button ${
    isLiked ? 'movie__like-button_active' : ''
  }`;
  return (
    <li className='movie'>
      <img className='movie__photo' src={image} alt={name} />
      <div className='movie__name-container'>
        <h2 className='movie__name'>{name}</h2>
        {isSavedMovie ? (
          <button
            className='movie__delete-button'
            type='button'
          />
        ) : (
          <button
            className={movieLikeButtonClassName}
            type='button'
            onClick={handleLikeCLick}
          />
        )}
      </div>
      <p className='movie__duration'>{duration}</p>
    </li>
  );
}

export default MoviesCard;
