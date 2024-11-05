// Define la fecha de destino
const targetDate = new Date("Nov 09, 2024 23:59:59").getTime();

// Actualiza la cuenta regresiva cada segundo
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Calcula el tiempo restante en días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Muestra el resultado en el elemento con id="countdown"
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // Si la cuenta regresiva ha terminado, muestra un mensaje y detiene el temporizador
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").textContent = "¡La cuenta regresiva ha terminado!";
    }
}, 1000);
