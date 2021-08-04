import React, { useState } from 'react';
import { useFormWithValidation } from '../../utils/useFormWithValidationHook';

function LoginForm({ onSubmit }) {
  const { values, handleChange, resetForm, errors, isValid } =
    useFormWithValidation();

  const [serverErrorMessage, setServerErrorMessage] = useState(null);
  function handleSubmit(e) {
    e.preventDefault();
    setServerErrorMessage(null);
    Promise.resolve(
      onSubmit({ email: values.email, password: values.password })
    )
      .then(resetForm)
      .catch((error) => {
        setServerErrorMessage(error.message);
      });
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
            value={values.email ?? ''}
            onChange={handleChange}
            placeholder='E-mail'
          />
          <span className='login-form__error'>{errors.email}</span>
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
            value={values.password ?? ''}
            onChange={handleChange}
            placeholder='Пароль'
          />
          <span className='login-form__error'>{errors.password}</span>
        </div>
        <div className='login-form__button-wrapper'>
          <span className='login-form__error login-form__error_type_server'>
            {serverErrorMessage}
          </span>
          <button
            className='login-form__button hover_type_blue-button'
            disabled={!isValid}
            type='submit'
          >
            Войти
          </button>
        </div>
      </form>
    </section>
  );
}

export default LoginForm;
