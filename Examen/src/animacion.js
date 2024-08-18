
document.addEventListener('DOMContentLoaded', () => {
    const imagenes = document.querySelectorAll('.cabecera-imagen');
    let index = 0;

    function mostrarImagen() {
        imagenes.forEach((img, i) => {
            img.style.opacity = i === index ? '1' : '0'; // Muestra la imagen actual y oculta las demás
        });
        index = (index + 1) % imagenes.length; // Avanza al siguiente índice
    }

    mostrarImagen(); // Muestra la primera imagen al cargar
    setInterval(mostrarImagen, 2000); // Cambia de imagen cada 2 segundos
});
