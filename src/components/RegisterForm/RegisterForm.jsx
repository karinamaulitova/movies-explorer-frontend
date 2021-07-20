import React, { useState } from 'react';

function RegisterForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ email, password, name });
  }

  return (
    <section className='register-form'>
      <h2 className='register-form__heading'>Добро пожаловать!</h2>
      <form
        className='register-form__form'
        id='register-form'
        name='register'
        noValidate
        onSubmit={handleSubmit}
      >
        <div className='register-form__input-wrapper'>
          <label className='register-form__label' htmlFor='register-name'>
            Имя
          </label>
          <input
            className='register-form__input'
            id='register-name'
            type='text'
            name='name'
            required
            value={name}
            onChange={handleNameChange}
            placeholder='Имя'
          />
          <span className='register-form__input-error' />
        </div>
        <div className='register-form__input-wrapper'>
          <label className='register-form__label' htmlFor='register-email'>
            E-mail
          </label>
          <input
            className='register-form__input'
            id='register-email'
            type='email'
            name='email'
            required
            value={email}
            onChange={handleEmailChange}
            placeholder='E-mail'
          />
          <span className='register-form__input-error' />
        </div>
        <div className='register-form__input-wrapper'>
          <label className='register-form__label' htmlFor='register-password'>
            Пароль
          </label>
          <input
            className='register-form__input'
            id='register-password'
            type='password'
            name='password'
            required
            value={password}
            onChange={handlePasswordChange}
            placeholder='Пароль'
          />
          <span className='auth-form__input-error' />
        </div>
        <button
          className='register-form__button hover_type_blue-button'
          type='submit'
        >
          Зарегистрироваться
        </button>
      </form>
    </section>
  );
}

export default RegisterForm;
