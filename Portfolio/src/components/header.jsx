import React from 'react';
import './header.css';

const Header = () => {
    return (
      <header>
        <div className="header-content">
          <img src="./img/Perfil.jpg" alt="Foto de Orlando" className="header-photo"/>
          <h1>Orlando Agustin Menendez</h1>
        </div>
        <nav>
          <a href="/">Home</a>
          <a href="/about">Sobre mi</a>
          <a href="/contact">Contacto</a>
        </nav>
      </header>
    );
  };
  
  export default Header;