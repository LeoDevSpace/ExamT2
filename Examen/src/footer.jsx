import React from 'react';
import './Navegador.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h1 className="footer-title">MueblesFAST</h1>
        <div className="social-icons">
          <a href="https://www.facebook.com/tu-pagina-de-mueblesfast" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/mueblesfast" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.youtube.com/channel/tu-canal-de-mueblesfast" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="YouTube" className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


