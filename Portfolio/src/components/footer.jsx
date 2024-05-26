import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 Orlando Agustin Menendez. Todos los derechos reservados.</p>
      <div className="social-links">
        <a href="https://www.facebook.com/agustin.menendez.9/" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.linkedin.com/in/agust%C3%ADn-men%C3%A9ndez-8238061b1/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;