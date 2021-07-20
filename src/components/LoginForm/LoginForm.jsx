import React, { useState } from 'react';

function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ email, password });
  }

  return (
    <section className='login-form'>
      <h2 className='login-form__heading'>Рады видеть!</h2>
      <form
        className='login-form__form'
        id='login-from'
        name='login'
        noValidate
        onSubmit={handleSubmit}
      >
        <div className='login-form__input-wrapper'>
          <label className='login-form__label' htmlFor='login-email'>
            E-mail
          </label>
          <input
            className='login-form__input'
            id='login-email'
            type='email'
            name='email'
            required
            value={email}
            onChange={handleEmailChange}
            placeholder='E-mail'
          />
          <span className='login-form__input-error' />
        </div>
        <div className='login-form__input-wrapper'>
          <label className='login-form__label' htmlFor='login-password'>
            Пароль
          </label>
          <input
            className='login-form__input'
            id='login-password'
            type='password'
            name='password'
            required
            value={password}
            onChange={handlePasswordChange}
            placeholder='Пароль'
          />
          <span className='login-form__input-error' />
        </div>
        <button className='login-form__button hover_type_blue-button' type='submit'>
          Войти
        </button>
      </form>
    </section>
  );
}

export default LoginForm;
