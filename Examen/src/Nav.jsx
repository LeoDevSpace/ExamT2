import React from 'react';
import './Navegador.css'; // Asegúrate de crear un archivo CSS para los estilos

function Navegador() {
  const handleMouseEnter = (e) => {
    e.target.style.color = '#ffd700'; // Cambia el color del texto al pasar el mouse
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = ''; // Restaura el color del texto original
  };

  return (
    <nav className="navegador">
      <a href="#muebles-fast" className="navegador-item2">
        <img src="./image/captura1.png" className="navegador-icono" alt="Logo" />
        <span className="navegador-titulo">MueblesFast</span>
      </a> 
      <div className='items'>
        <a 
          href="#quienes-somos" 
          className="itemsa"
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          <span className="navegador-titulo">Quiénes Somos</span>
        </a> 
        <a 
          href="#tienda" 
          className="itemsa"
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          <span className="navegador-titulo">Tienda</span>
        </a> 
        <a 
          href="#servicios" 
          className="itemsa"
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          <span className="navegador-titulo">Servicios</span>
        </a> 
        <a 
          href="#ofertas" 
          className="itemsa"
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          <span className="navegador-titulo">Ofertas</span>
        </a>
      </div>
      <div className="navegador-linea"></div>
    </nav>
  );
}

export default Navegador;



