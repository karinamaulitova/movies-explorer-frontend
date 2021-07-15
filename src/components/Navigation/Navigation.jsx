import React from 'react';
import { NavLink } from 'react-router-dom';
import profile from '../../images/profile-icon.svg';


function Navigation() {
  return (
    <nav className='nav'>
     <ul className='nav__list'>
         <li className='nav__item nav__item_type_mobile'>
             <NavLink className='nav__link' to='/'>Главная</NavLink>
         </li>
         <li className='nav__item'>
             <NavLink className='nav__link' to='/movies'>Фильмы</NavLink>
         </li>
         <li className='nav__item'>
             <NavLink className='nav__link' to='/saved-movies'>Сохранённые фильмы</NavLink>
         </li>
     </ul>
     <NavLink className='nav__profile-link' to='/profile'>
         <p className='nav__profile-text'>Аккаунт</p>
         <img className='nav__profile-icon' src={profile} alt='Иконка профиля'/>
     </NavLink>
    </nav>
  );
}

export default Navigation;