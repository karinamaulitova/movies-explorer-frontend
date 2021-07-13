import React from 'react';
import { Link } from 'react-router-dom';

function NavTab() {
  return (
    <ul className='nav-list'>
      <li className='nav-list__item'>
        <Link to='#about-project' className='nav-list__link'>
          О проекте
        </Link>
      </li>
      <li className='nav-list__item'>
        <Link to='#techs' className='nav-list__link'>
          Технологии
        </Link>
      </li>
      <li className='nav-list__item'>
        <Link to='#student' className='nav-list__link'>
          Студент
        </Link>
      </li>
    </ul>
  );
}

export default NavTab;
