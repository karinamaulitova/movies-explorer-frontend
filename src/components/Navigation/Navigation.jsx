import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import profile from '../../images/profile-icon.svg';

function Navigation() {
  const [isNavigationOpen, setisNavigationOpen] = useState(false);

  function handleBurgerButtonClick() {
    setisNavigationOpen(true);
  }

  function closeNavigation() {
    setisNavigationOpen(false);
  }

  return (
    <div className='nav'>
      <nav
        className={
          isNavigationOpen ? 'nav__content nav__content_open' : 'nav__content'
        }
      >
        <button
          className={
            isNavigationOpen
              ? 'nav__close-button nav__close-button_visible'
              : 'nav__close-button'
          }
          type='button'
          onClick={closeNavigation}
        />
        <ul className='nav__list'>
          <li className='nav__item nav__item_type_burger-menu'>
            <NavLink className='nav__link' exact to='/'>
              Главная
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink className='nav__link' exact to='/movies'>
              Фильмы
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink className='nav__link' exact to='/saved-movies'>
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <NavLink className='nav__profile-link' exact to='/profile'>
          <p className='nav__profile-text'>Аккаунт</p>
          <img
            className='nav__profile-icon'
            src={profile}
            alt='Иконка профиля'
          />
        </NavLink>
      </nav>
      <button
        className='nav__burger-button'
        type='button'
        onClick={handleBurgerButtonClick}
      />
    </div>
  );
}

export default Navigation;
