import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';
import logo from '../../images/logo.svg';

function RegisterPage() {
  const [name, setName] = useState('');
  function handleNameChange(e) {
    setName(e.target.value);
  }
  return (
    <div className='register-page'>
      <main className='register-page__main'>
        <img className='register-page__logo' src={logo} alt='Логотип' />
        <AuthForm
          title='Добро пожаловать!'
          id='register'
          name='register-form'
          submitText='Зарегистрироваться'
        >
          <div className='auth-form__input-wrapper'>
            <label className='auth-form__label' htmlFor='register-name'>
              Имя
            </label>
            <input
              className='auth-form__input'
              id='register-name'
              type='text'
              name='name'
              required
              value={name}
              onChange={handleNameChange}
            />
            <span className='auth-form__input-error' />
          </div>
        </AuthForm>
        <p className='register-page__link-text'>
          Уже зарегистрированы?&nbsp;
          <Link to='/signin' className='register-page__link'>
            Войти
          </Link>
        </p>
      </main>
    </div>
  );
}

export default RegisterPage;
