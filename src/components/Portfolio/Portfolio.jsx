import React from 'react';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__links-list'>
        <li className='portfolio__link-item'>
          <a
            href='https://how-to-learn-karina.netlify.app/'
            className='portfolio__link hover_type_no-underline'
            target='_blank'
            rel='noreferrer'
          >
            <p className='portfolio__link-text'>Статичный сайт</p>
            <p className='portfolio__link-text'>↗</p>
          </a>
        </li>
        <li className='portfolio__link-item'>
          <a
            href='https://karinamaulitova.github.io/russian-travel/index.html'
            className='portfolio__link hover_type_no-underline'
            target='_blank'
            rel='noreferrer'
          >
            <p className='portfolio__link-text'>Адаптивный сайт</p>
            <p className='portfolio__link-text'>↗</p>
          </a>
        </li>
        <li className='portfolio__link-item'>
          <a
            href='https://karina.mesto.students.nomoredomains.club/'
            className='portfolio__link hover_type_no-underline'
            target='_blank'
            rel='noreferrer'
          >
            <p className='portfolio__link-text'>Одностраничное приложение</p>
            <p className='portfolio__link-text'>↗</p>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
