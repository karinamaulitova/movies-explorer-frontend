import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import logo from '../../images/logo.svg';
import * as auth from '../../utils/auth';

function LoginPage({ onLoggedIn }) {
  
  function handleSubmit({ email, password }) {
    if (!email || !password) {
      return Promise.reject();
    }
    return auth
      .authorize(email, password)
      .then(() => {
        onLoggedIn();
      })
  }

  return (
    <div className='login-page'>
      <main className='login-page__main'>
        <img className='login-page__logo' src={logo} alt='Логотип' />
        <LoginForm onSubmit={handleSubmit} />
        <p className='login-page__link-text'>
          Ещё не зарегистрированы?&nbsp;
          <Link to='/signup' className='login-page__link hover'>
            Регистрация
          </Link>
        </p>
      </main>
    </div>
  );
}

export default LoginPage;
