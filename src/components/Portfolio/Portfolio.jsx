import React from 'react';
import arrow from '../../images/arrow-icon.svg';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__links-list'>
        <li className='portfolio__link-item'>
          <a href='https://how-to-learn-karina.netlify.app/' className='portfolio__link'>
            <p className='portfolio__link-text'>Статичный сайт</p>
            <img
              className='portfolio__arrow-icon'
              src={arrow}
              alt='Стрелочка'
            />
          </a>
        </li>
        <li className='portfolio__link-item'>
          <a href='https://karinamaulitova.github.io/russian-travel/index.html' className='portfolio__link'>
            <p className='portfolio__link-text'>Адаптивный сайт</p>
            <img
              className='portfolio__arrow-icon'
              src={arrow}
              alt='Стрелочка'
            />
          </a>
        </li>
        <li className='portfolio__link-item'>
          <a href='https://karina.mesto.students.nomoredomains.club/' className='portfolio__link'>
            <p className='portfolio__link-text'>Одностраничное приложение</p>
            <img
              className='portfolio__arrow-icon'
              src={arrow}
              alt='Стрелочка'
            />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
