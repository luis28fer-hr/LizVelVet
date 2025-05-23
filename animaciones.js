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



// Carrusel 1
let currentIndex = 0;
const slider1 = document.querySelector('.carousel-slider');
const cards1 = document.querySelectorAll('.card');
const cardWidth1 = cards1[0].offsetWidth;  // Ancho de una tarjeta
const totalCards1 = cards1.length;

function slideCarousel1() {
  currentIndex++;
  // Cambiamos el reinicio: Si llegamos al final, reiniciamos al principio
  if (currentIndex >= totalCards1 - 1) {
    currentIndex = 0;  // Reiniciar al principio cuando llegamos al final
  }
  // Aplica la transformación solo si es válida
  slider1.style.transform = `translateX(-${currentIndex * cardWidth1}px)`;
}

setInterval(slideCarousel1, 6500);  // Cambia la tarjeta cada 6.5 segundos



// Carrusel 2
let currentIndex2 = 0;
const sliderbreak = document.querySelector('.break');
let cardsbreak = document.querySelectorAll('.container-img');  // Actualizar la referencia después de clonar
let cardWidthbreak = cardsbreak[0].offsetWidth;  // Ancho de una tarjeta
const totalCardsbreak = cardsbreak.length;

// Duplicar las imágenes
for (let x = 0; x < 3; x++) {
  for (let i = 0; i < totalCardsbreak; i++) {
    const clone = cardsbreak[i].cloneNode(true);
    sliderbreak.appendChild(clone);
  }
}
//*
// Necesitas recalcular los elementos después de clonar
cardsbreak = document.querySelectorAll('.container-img');
cardWidthbreak = cardsbreak[0].offsetWidth;
const totalCardsWithClones = cardsbreak.length;

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




const navLinks = document.querySelectorAll('.link');

// Función para eliminar la clase activa de todos los enlaces
function removeActiveClass() {
  navLinks.forEach(link => {
    link.classList.remove('link.active');
  });
}

// Escucha el clic en cada enlace
navLinks.forEach(link => {
  link.addEventListener('link.active', function () {
    // Primero, eliminamos la clase activa de todos
    removeActiveClass();
    // Luego, agregamos la clase activa al enlace clicado
    link.classList.add('link.active');
  });
});




const sliders = document.querySelectorAll('.container-especialidades');

sliders.forEach(slider => {
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return; // Solo hacer algo si el mouse está presionado
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; // La cantidad de desplazamiento
    slider.scrollLeft = scrollLeft - walk;
  });
});



function toggleOpacity() {
  const targetDiv = document.getElementById('targetMobile');

  targetDiv.style.opacity = '1';
  targetDiv.style.position = 'fixed';
  targetDiv.style.zIndex = '100';
}

function toggleOpacityOff() {
  const targetDiv = document.getElementById('targetMobile');

  targetDiv.style.opacity = '0';
  targetDiv.style.position = 'absolute';
  targetDiv.style.zIndex = '0';
}
