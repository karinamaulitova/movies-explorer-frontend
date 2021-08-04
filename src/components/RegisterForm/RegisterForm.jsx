import React, { useState } from 'react';
import { useFormWithValidation } from '../../utils/useFormWithValidationHook';

function RegisterForm({ onSubmit }) {
  const { values, handleChange, resetForm, errors, isValid } =
    useFormWithValidation();

  const [serverErrorMessage, setServerErrorMessage] = useState(null);   

  function handleSubmit(e) {
    e.preventDefault();
    setServerErrorMessage(null);
    Promise.resolve(
      onSubmit({
        email: values.email,
        password: values.password,
        name: values.name,
      })
    ).then(resetForm).catch(error => {
      setServerErrorMessage(error.message)
    });
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
            value={values.name ?? ''}
            onChange={handleChange}
            pattern='[a-zA-Zа-яА-ЯёЁ\s\-]+$'
            placeholder='Имя'
          />
          <span className='register-form__error'>{errors.name}</span>
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
            value={values.email ?? ''}
            onChange={handleChange}
            placeholder='E-mail'
          />
          <span className='register-form__error'>{errors.email}</span>
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
            value={values.password ?? ''}
            onChange={handleChange}
            placeholder='Пароль'
          />
          <span className='register-form__error'>{errors.password}</span>
        </div>
        <div className='register-form__button-wrapper'>
        <span className='register-form__error register-form__error_type_server'>{serverErrorMessage}</span>
        <button
          className='register-form__button hover_type_blue-button'
          disabled={!isValid}
          type='submit'
        >
          Зарегистрироваться
        </button>
        </div>
      </form>
    </section>
  );
}

export default RegisterForm;
