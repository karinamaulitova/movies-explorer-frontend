import React from 'react';

function NavTab() {
  return (
    <ul className='navtab-list'>
      <li className='navtab-list__item'>
        <a href='#about-project' className='navtab-list__link'>
          О проекте
        </a>
      </li>
      <li className='navtab-list__item'>
        <a href='#techs' className='navtab-list__link'>
          Технологии
        </a>
      </li>
      <li className='navtab-list__item'>
        <a href='#student' className='navtab-list__link'>
          Студент
        </a>
      </li>
    </ul>
  );
}

export default NavTab;
