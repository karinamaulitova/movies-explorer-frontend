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
        <div className='nav__list-wrapper'>
        <button
          className={
            isNavigationOpen
              ? 'nav__close-button nav__close-button_visible hover_type_no-underline'
              : 'nav__close-button'
          }
          type='button'
          onClick={closeNavigation}
        />
        <ul className='nav__list'>
          <li className='nav__item nav__item_type_burger-menu'>
            <NavLink className='nav__link hover' exact to='/'>
              Главная
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink className='nav__link hover_type_no-underline' exact to='/movies'>
              Фильмы
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink className='nav__link hover_type_no-underline' exact to='/saved-movies'>
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <NavLink className='nav__profile-link hover_type_no-underline' exact to='/profile'>
          <p className='nav__profile-text'>Аккаунт</p>
          <img
            className='nav__profile-icon'
            src={profile}
            alt='Иконка профиля'
          />
        </NavLink>
        </div>
      </nav>
      <button
        className='nav__burger-button hover_type_no-underline'
        type='button'
        onClick={handleBurgerButtonClick}
      />
    </div>
  );
}

export default Navigation;
