
// Seleccionamos el div con ID 'whatsappDiv'
const whatsappDiv = document.getElementById('whatsappLink');

// Agregamos un event listener para redirigir cuando se haga clic en el div
whatsappDiv.addEventListener('click', function () {
    // Número de teléfono de WhatsApp en formato internacional (sin +)
    const phoneNumber = '+525654316131'; // Cambia este número por el tuyo
    // Mensaje que quieres que se envíe automáticamente
    const message = '¡Hola!🌟 Me gustaría saber más sobre los servicios que ofreces en LizVelvet 💅🏻. Estoy interesado(a) en cuidar mi imagen y me encantaría recibir más detalles. ¡Espero tu respuesta! 🤗';

    // Codificamos el mensaje para que sea parte de la URL
    const encodedMessage = encodeURIComponent(message);

    // Construimos la URL de WhatsApp con el número y el mensaje codificado
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Abrimos la URL de WhatsApp en una nueva ventana o pestaña (_blank)
    window.open(whatsappURL, '_blank');
});