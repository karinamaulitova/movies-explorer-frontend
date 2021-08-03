import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg';

function Header({ loggedIn }) {
  return (
    <header className='header'>
      <Link className='header__link' to='/'>
        <img className='header__logo' src={logo} alt='Логотип' />
      </Link>

      {loggedIn ? (
        <Navigation />
      ) : (
        <div className='header__container'>
          <Link className='header__link hover' to='/signup'>
            Регистрация
          </Link>
          <Link
            className='header__login-button hover_type_blue-button'
            to='/signin'
          >
            Войти
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
