import React from "react";

function Header() {
  return (
    <header className='container'>
      <a href="/" className="header-logo">
        <h1>GeneoJoker</h1>
      </a>

      <a href="https://github.com/kadetXx/geneo-joket" className='header-icon'>
        <i className="fab fa-github"></i> Dev
      </a>
    </header>
  );
}

export default Header;
