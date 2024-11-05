document.addEventListener("DOMContentLoaded", function () {
  const cookieConsent = document.getElementById("cookie-consent");
  const acceptCookiesButton = document.getElementById("accept-cookies");

  // Verificar si el usuario ya ha aceptado las cookies
  if (!localStorage.getItem("cookies-accepted")) {
    cookieConsent.style.display = "flex"; // Mostrar el aviso
  }

  // Manejar el clic en el botón de aceptar
  acceptCookiesButton.addEventListener("click", function () {
    // Guardar aceptación en localStorage
    localStorage.setItem("cookies-accepted", "true");
    // Ocultar el aviso
    cookieConsent.style.display = "none";
  });
});
