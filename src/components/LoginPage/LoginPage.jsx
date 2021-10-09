import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import logo from '../../images/logo.svg';
import * as auth from '../../utils/auth';
import Preloader from '../Preloader/Preloader';

function LoginPage({ onLoggedIn, loggedIn }) {
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (loggedIn) {
      history.replace('/movies');
    }
  }, [history, loggedIn]);

  function handleSubmit({ email, password }) {
    setIsLoading(true);
    if (!email || !password) {
      return Promise.reject();
    }
    return auth
      .authorize(email, password)
      .then(() => {
        onLoggedIn();
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div className='login-page'>
      {isLoading && (
        <div className='login-page__overlay'>
          <Preloader />
        </div>
      )}
        <main className='login-page__main'>
          <img className='login-page__logo' src={logo} alt='Логотип' />
          <LoginForm isDisabled={isLoading} onSubmit={handleSubmit} />
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
