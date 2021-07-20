import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import * as auth from '../../utils/auth';
import RegisterForm from '../RegisterForm/RegisterForm';

function RegisterPage({ onRegister }) {
  
  function handleSubmit(data) {
    const { name, email, password } = data;
    auth
      .register(name, email, password)
      .then(() => {
        onRegister();
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className='register-page'>
      <main className='register-page__main'>
        <img className='register-page__logo' src={logo} alt='Логотип' />
        <RegisterForm onSubmit={handleSubmit} />
        <p className='register-page__link-text'>
          Уже зарегистрированы?&nbsp;
          <Link to='/signin' className='register-page__link hover'>
            Войти
          </Link>
        </p>
      </main>
    </div>
  );
}

export default RegisterPage;
