import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import logo from '../../images/logo.svg';
import * as auth from '../../utils/auth';

function LoginPage({ onLoggedIn, loggedIn }) {

  const history = useHistory();

  useEffect(()=>{
    if(loggedIn){
      history.replace('/movies')
    }
  },[history,loggedIn])
  
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
