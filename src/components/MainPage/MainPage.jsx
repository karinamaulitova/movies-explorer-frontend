import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';

function MainPage() {
  return (
    <div className='main-page'>
      <Header>
        <Link className='header__link hover' to='/signup'>
          Регистрация
        </Link>
        <Link className='header__login-button hover_type_blue-button' to='/signin'>
          Войти
        </Link>
      </Header>
      <main className='main-page__main'>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;
