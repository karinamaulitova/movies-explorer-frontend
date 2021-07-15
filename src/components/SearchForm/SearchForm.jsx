import React, { useState } from 'react';
import search from '../../images/search-icon.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <section className='search-form'>
      <form className='search-form__form' name='search'>
        <div className='search-form__input-wrapper'>
          <input
            className='search-form__input'
            type='search'
            placeholder='Фильмы'
            value={value}
            onChange={handleChange}
          />
          <button type='submit' className='search-form__button'>
            <img
              className='search-form__button-icon'
              src={search}
              alt='иконка лупы'
            />
          </button>
        </div>
        <FilterCheckbox />
      </form>
    </section>
  );
}

export default SearchForm;
