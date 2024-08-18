import React, { useState } from 'react';
import './Navegador.css'; // Asegúrate de crear un archivo CSS para los estilos

function Testimonio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonios = [
    {
      texto: "Los muebles que compré superaron mis expectativas en cuanto a calidad. Cada pieza está perfectamente elaborada con materiales duraderos, y el acabado es impecable. No solo mejoraron el aspecto de mi hogar, sino que también siento que hice una excelente inversión. ¡Definitivamente recomendaría esta marca a cualquiera que busque muebles de alta calidad!",
      autor: "Mike Brown",
    },
    {
      texto: "He estado buscando muebles que no solo sean estéticamente agradables, sino también robustos y funcionales. Los muebles que adquirí cumplen con creces ambos requisitos. La atención al detalle y la artesanía son evidentes en cada detalle. Estos muebles han transformado mi espacio y han demostrado ser extremadamente resistentes al uso diario. ¡Estoy muy satisfecho con mi compra!",
      autor: "Leo Aliaga",
    }
  ];

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonios.length);
  };

  const handlePreviousClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonios.length) % testimonios.length);
  };

  return (
    <div className="testimonio">
      <section className="testimonio__section">
        <div className="testimonio__imagen">
          <img src="./image/testimonio.png" className="testimoniofoto" alt="Testimonio" />
        </div>
        <div className='columna'>
          <div className="testimonio__contenido">
            <h2>Testimonios de<br />Nuestros Clientes</h2>
            <p>{testimonios[currentIndex].texto}</p>
            <span className="testimonio__autor">{testimonios[currentIndex].autor}</span>
          </div>
          <div className="testimonio__navegacion">
            <button className="testimonio__boton-anterior" onClick={handlePreviousClick}>&larr;</button>
            <button className="testimonio__boton-siguiente" onClick={handleNextClick}>&rarr;</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonio;
