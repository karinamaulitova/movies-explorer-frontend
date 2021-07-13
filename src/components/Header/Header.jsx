import React from "react";
import logo from "../../images/logo.svg";

function Header({children}) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип" />
      <div className='header__container'>
      {children}
      </div>
    </header>
  );
}

export default Header;