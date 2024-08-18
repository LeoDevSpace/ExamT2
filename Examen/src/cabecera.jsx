import React, { useEffect } from 'react';
import './Navegador.css'; // Asegúrate de crear un archivo CSS para los estilos

function Cabecera() {
    useEffect(() => {
        // Aquí va el contenido de tu animacion.js
        const imagenes = document.querySelectorAll('.cabecera-imagen');
        let index = 0;

        function mostrarImagen() {
            imagenes.forEach((img, i) => {
                img.style.opacity = i === index ? '1' : '0'; // Muestra la imagen actual y oculta las demás
            });
            index = (index + 1) % imagenes.length; // Avanza al siguiente índice
        }

        mostrarImagen(); // Muestra la primera imagen al cargar
        const interval = setInterval(mostrarImagen, 2000); // Cambia de imagen cada 2 segundos

        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, []); // [] significa que este efecto solo se ejecuta al montar y desmontar el componente

    return (
        <header>
            <div className="cabecera-imagenes">
                <img src="./image/mueble1.png" alt="Imagen 1" className="cabecera-imagen" />
                <img src="./image/mueble2.png" alt="Imagen 2" className="cabecera-imagen" />
                <img src="./image/mueble3.png" alt="Imagen 3" className="cabecera-imagen" />
            </div>
        </header>
    );
}

export default Cabecera;



