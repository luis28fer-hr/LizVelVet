const snowContainer = document.querySelector('#Lizvelvet'); // Seleccionar la sección específica
const createSnowflake = () => {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.textContent = "❄";
  snowflake.style.left = Math.random() * window.innerWidth + "px";
  snowflake.style.animationDuration = Math.random() * 5 + 10 + "s"; // Caída más rápida o más lenta
  snowflake.style.fontSize = Math.random() * 15 + 24 + "px"; // Tamaño de copos variado
  snowflake.style.opacity = Math.random() * 0.8 + 0.4;

  snowContainer.appendChild(snowflake);

  // Eliminar el copo después de que haya salido de la pantalla
  setTimeout(() => {
    snowflake.remove();
  }, 7800);
};

// Crear copos de nieve continuamente
setInterval(createSnowflake, 200);