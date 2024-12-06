const snowContainer = document.querySelector('#Lizvelvet'); // Seleccionar la sección específica
const createSnowflake = () => {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.textContent = "❄";
  snowflake.style.left = Math.random() * window.innerWidth + "px";
  snowflake.style.animationDuration = Math.random() * 4 + 8 + "s"; // Caída más rápida o más lenta
  snowflake.style.fontSize = Math.random() * 0.8 + 18 + "px"; // Tamaño de copos variado
  snowflake.style.opacity = Math.random() * 0.7 + 0.2;

  snowContainer.appendChild(snowflake);

  // Eliminar el copo después de que haya salido de la pantalla
  setTimeout(() => {
    snowflake.remove();
  }, 4500);
};

// Crear copos de nieve continuamente
setInterval(createSnowflake, 100);