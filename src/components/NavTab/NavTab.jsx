import React from 'react';

function NavTab() {
  return (
    <ul className='navtab-list'>
      <li className='navtab-list__item'>
        <a href='#about-project' className='navtab-list__link hover_type_light-button'>
          О проекте
        </a>
      </li>
      <li className='navtab-list__item'>
        <a href='#techs' className='navtab-list__link hover_type_light-button'>
          Технологии
        </a>
      </li>
      <li className='navtab-list__item'>
        <a href='#student' className='navtab-list__link hover_type_light-button'>
          Студент
        </a>
      </li>
    </ul>
  );
}

export default NavTab;
