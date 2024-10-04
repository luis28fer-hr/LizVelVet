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



let currentIndex2 = 0;
const sliderbreak = document.querySelector('.break');
const cardsbreak = document.querySelectorAll('.container-img');
const cardWidthbreak = cardsbreak[0].offsetWidth;  // Ancho de una tarjeta
const totalCardsbreak = cardsbreak.length;

// Duplicar las imágenes
for (let x = 0; x < 3; x++) {
  for (let i = 0; i < totalCardsbreak; i++) {
    const clone = cardsbreak[i].cloneNode(true);
    sliderbreak.appendChild(clone);
  }
}
  

const totalCardsWithClones = cardsbreak.length * 4;  // Total de tarjetas incluyendo las copias

function slideCarouselbreak() {
  currentIndex2++;
  // Reiniciar al principio cuando llegamos a la última tarjeta original
  if (currentIndex2 >= totalCardsWithClones) {
    currentIndex2 = 0;  
    // Opcional: reiniciar la transición para un efecto más suave
    sliderbreak.style.transition = 'none';  // Desactiva la transición
    sliderbreak.style.transform = `translateX(0)`; // Regresa al inicio
    setTimeout(() => {
      sliderbreak.style.transition = 'transform 3s linear';  // Vuelve a activar la transición
      currentIndex2++;
      sliderbreak.style.transform = `translateX(-${currentIndex2 * cardWidthbreak}px)`; // Mueve una vez más
    }, 50); // Espera un pequeño tiempo antes de mover
  } else {
    sliderbreak.style.transform = `translateX(-${currentIndex2 * cardWidthbreak}px)`;
  }
}

setInterval(slideCarouselbreak, 3000);  // Cambia la tarjeta cada 3 segundos
