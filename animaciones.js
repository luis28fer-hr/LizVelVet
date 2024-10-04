// Array de palabras que se rotarán
const palabras = ['elegancia ', 'perfección', 'belleza'];
let palabraActual = 0;

// Seleccionar el span que contiene la palabra
const spanPalabra = document.querySelector('.wordchange');

// Función para cambiar la palabra
function cambiarPalabra() {

    // Esperar el tiempo de la animación para cambiar el texto
    setTimeout(() => {
        palabraActual = (palabraActual + 1) % palabras.length; // Cambia la palabra
        spanPalabra.textContent = palabras[palabraActual];    // Actualiza el contenido

    }, 0); // Tiempo para sincronizar con el fade-out
}

// Cambiar palabra cada 3 segundos
setInterval(cambiarPalabra, 5000);



let currentIndex = 0;
const slider = document.querySelector('.carousel-slider');
const cards = document.querySelectorAll('.card');
const cardWidth = cards[0].offsetWidth;  // Ancho de una tarjeta
const totalCards = cards.length;

function slideCarousel() {
  currentIndex++;
  if (currentIndex >= totalCards - 1) {
    currentIndex = 0;  // Reiniciar al principio cuando llegamos al final
  }
  slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

setInterval(slideCarousel, 6500);  // Cambia la tarjeta cada 3 segundos
