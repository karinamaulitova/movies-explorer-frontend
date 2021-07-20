import React, { useState } from 'react';
// import search from '../../images/search-icon.svg';
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
            required
            onChange={handleChange}
          />
          <button type='submit' className='search-form__button hover_type_svg'>
            <svg
            className='search-form__button-icon'
              width='22'
              height='22'
              viewBox='0 0 22 22'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12.7927 12.2638C11.3608 13.6957 9.03915 13.6957 7.60723 12.2638C6.1753 10.8319 6.1753 8.51027 7.60723 7.07835C9.03915 5.64643 11.3608 5.64643 12.7927 7.07835C14.2246 8.51027 14.2246 10.8319 12.7927 12.2638ZM13.2331 13.6468C11.2728 15.1462 8.45724 14.9994 6.66442 13.2066C4.7118 11.254 4.7118 8.08816 6.66442 6.13554C8.61704 4.18292 11.7829 4.18292 13.7355 6.13554C15.5282 7.92829 15.675 10.7437 14.1758 12.7039L17.7425 16.2706L16.7997 17.2134L13.2331 13.6468Z'
                fill='white'
              />
            </svg>
          </button>
        </div>
        <FilterCheckbox />
      </form>
    </section>
  );
}

export default SearchForm;
