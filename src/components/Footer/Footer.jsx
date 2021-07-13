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
            <a className='footer__link' href='https://praktikum.yandex.ru/'>
              Яндекс.Практикум
            </a>
          </li>
          <li className='footer__link-item'>
            <a className='footer__link' href='https://github.com/karinamaulitova'>
            Github
            </a>
          </li>
          <li className='footer__link-item'>
            <a className='footer__link' href='https://www.facebook.com/karina.maulitova'>
            Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
