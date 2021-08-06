import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../images/logo.svg';
import * as auth from '../../utils/auth';
import Preloader from '../Preloader/Preloader';
import RegisterForm from '../RegisterForm/RegisterForm';

function RegisterPage({ onRegister, loggedIn }) {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (loggedIn) {
      history.replace('/movies');
    }
  }, [history, loggedIn]);

  function handleSubmit(data) {
    const { name, email, password } = data;
    setIsLoading(true);
    return auth
      .register(name, email, password)
      .then(() => {
        onRegister();
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  return (
    <div className='register-page'>
      {isLoading && (
        <div className='register-page__overlay'>
          <Preloader />
        </div>
      )}
      <main className='register-page__main'>
        <img className='register-page__logo' src={logo} alt='Логотип' />
        <RegisterForm isDisabled={isLoading} onSubmit={handleSubmit} />
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
