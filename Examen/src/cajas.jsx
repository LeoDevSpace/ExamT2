import React, { useState } from 'react';
import './Navegador.css'; // Asegúrate de crear un archivo CSS para los estilos

function Cajas() {
    // Estados para cada mueble
    const [imgMueble1, setImgMueble1] = useState('./image/mue1.png');
    const [imgMueble2, setImgMueble2] = useState('./image/mue2.png');
    const [imgMueble3, setImgMueble3] = useState('./image/mue3.png');

    const handleMouseEnter = (setImgFunction, hoverImg) => {
        setImgFunction(hoverImg);
    };

    const handleMouseLeave = (setImgFunction, originalImg) => {
        setImgFunction(originalImg);
    };

    return (
        <div className="cajas-container">
            <div className="caja">
                <h1 className="titulo">Mueble 1</h1>
                <p className="descripcion">Hecho de madera</p>
                <div className="imagen">
                    <img
                        src={imgMueble1}
                        alt="Mueble 1"
                        onMouseEnter={() => handleMouseEnter(setImgMueble1, './image/mueb1.png')}
                        onMouseLeave={() => handleMouseLeave(setImgMueble1, './image/mue1.png')}
                    />
                </div>
            </div>
            <div className="caja">
                <h1 className="titulo">Mueble 2</h1>
                <p className="descripcion">Hecho de madera</p>
                <div className="imagen">
                    <img
                        src={imgMueble2}
                        alt="Mueble 2"
                        onMouseEnter={() => handleMouseEnter(setImgMueble2, './image/mueb2.png')}
                        onMouseLeave={() => handleMouseLeave(setImgMueble2, './image/mue2.png')}
                    />
                </div>
            </div>
            <div className="caja">
                <h1 className="titulo">Mueble 3</h1>
                <p className="descripcion">Hecho de madera</p>
                <div className="imagen">
                    <img
                        src={imgMueble3}
                        alt="Mueble 3"
                        onMouseEnter={() => handleMouseEnter(setImgMueble3, './image/mueb3.png')}
                        onMouseLeave={() => handleMouseLeave(setImgMueble3, './image/mue3.png')}
                    />
                </div>
            </div>
        </div>
    );
}

export default Cajas;

