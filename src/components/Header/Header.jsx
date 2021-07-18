import React from "react";
import { Link } from 'react-router-dom';
import logo from "../../images/logo.svg";

function Header({children}) {
  return (
    <header className="header">
      <Link className='header__link' to='/'>
      <img className="header__logo" src={logo} alt="Логотип" />
      </Link>
      <div className='header__container'>
      {children}
      </div>
    </header>
  );
}

export default Header;