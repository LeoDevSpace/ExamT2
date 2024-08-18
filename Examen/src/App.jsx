import React from 'react';
import Navegador from './Nav.jsx';
import Cabecera from './cabecera.jsx'; // Asegúrate de que la ruta sea correcta
import Coleccion from './coleccion.jsx';
import Cajas from './cajas.jsx';
import Testimonio from './testimonio.jsx';
import Footer from './footer.jsx';

function Principal() {
    return (
        <div>
            <div>
                <Navegador />
            </div>
            <div>
                <Cabecera />
            </div>
            <div>
                <Coleccion />
            </div>
            <div>
                <Cajas />
            </div>
            <div>
                <Testimonio />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Principal;



