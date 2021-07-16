import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='footer'>
      <p className='footer__text'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__container'>
        <p className='footer__copyright'>&copy; {currentYear}</p>
        <ul className='footer__links-list'>
          <li className='footer__link-item'>
            <a className='footer__link hover' href='https://praktikum.yandex.ru/' target='_blank' rel="noreferrer">
              Яндекс.Практикум
            </a>
          </li>
          <li className='footer__link-item'>
            <a className='footer__link hover' href='https://github.com/karinamaulitova' target='_blank' rel="noreferrer">
            Github
            </a>
          </li>
          <li className='footer__link-item'>
            <a className='footer__link hover' href='https://www.facebook.com/karina.maulitova' target='_blank' rel="noreferrer">
            Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
