import React, { useState } from 'react';

function AuthForm({ title, id, name, submitText, children, buttonClass }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <section className='auth-form'>
      <h2 className='auth-form__heading'>{title}</h2>
      <form
        className='auth-form__form'
        id={`${id}-form`}
        name={name}
        noValidate
      >
        {children}
        <div className='auth-form__input-wrapper'>
          <label className='auth-form__label' htmlFor={`${id}-email`}>
            E-mail
          </label>
          <input
            className='auth-form__input'
            id={`${id}-email`}
            type='email'
            name='email'
            required
            value={email}
            onChange={handleEmailChange}
          />
          <span className='auth-form__input-error' />
        </div>
        <div className='auth-form__input-wrapper'>
          <label className='auth-form__label' htmlFor={`${id}-password`}>
            Пароль
          </label>
          <input
            className='auth-form__input'
            id={`${id}-password`}
            type='password'
            name='password'
            required
            value={password}
            onChange={handlePasswordChange}
          />
          <span className='auth-form__input-error' />
        </div>
        <button className={`auth-form__button ${buttonClass} hover_type_blue-button`} type='submit'>
          {submitText}
        </button>
      </form>
    </section>
  );
}

export default AuthForm;
