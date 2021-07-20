import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';
import logo from '../../images/logo.svg';

function LoginPage() {
  return (
    <div className='login-page'>
      <main className='login-page__main'>
        <img className='login-page__logo' src={logo} alt='Логотип' />
        <AuthForm
          title='Рады видеть!'
          id='login'
          name='login-form'
          submitText='Войти'
          buttonClass='auth-form__button_type_login'
        />
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
