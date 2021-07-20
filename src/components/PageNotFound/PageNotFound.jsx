import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className='page-404'>
      <main className='page-404__main'>
          <div className='page-404__text-wrapper'>
          <h1 className='page-404__heading'>404</h1>
          <p className='page-404__text'>Страница не найдена</p>
          </div>
        <Link to='/' className='page-404__link hover'>
        Назад
        </Link>
      </main>
    </div>
  );
}

export default PageNotFound;
