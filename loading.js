// ===============================
// Configuración rápida
// ===============================
// Cambia esta fecha por la fecha real de regreso del sitio.
// Formato recomendado: AAAA-MM-DDTHH:MM:SS-06:00
const launchDate = new Date("2026-07-12T06:00:00-00:00").getTime();

// Cambia este porcentaje de avance si quieres mostrar otro progreso.
const progressPercent = 62;

// ===============================
// Contador regresivo
// ===============================
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function formatNumber(number) {
    return String(number).padStart(2, "0");
}

function updateCountdown() {
    const now = new Date().getTime();
    const distance = launchDate - now;

    if (distance <= 0) {
        daysEl.textContent = "00";
        hoursEl.textContent = "00";
        minutesEl.textContent = "00";
        secondsEl.textContent = "00";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = formatNumber(days);
    hoursEl.textContent = formatNumber(hours);
    minutesEl.textContent = formatNumber(minutes);
    secondsEl.textContent = formatNumber(seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ===============================
// Barra de progreso
// ===============================
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");

window.addEventListener("load", () => {
    const safeProgress = Math.max(0, Math.min(progressPercent, 100));
    progressText.textContent = `${safeProgress}%`;

    setTimeout(() => {
        progressFill.style.width = `${safeProgress}%`;
    }, 350);
});
