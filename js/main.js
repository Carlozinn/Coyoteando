const currentYear = document.querySelector("#current-year");
const menuToggle = document.querySelector(".menu-toggle");
const mainNavigation = document.querySelector("#main-navigation");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

if (menuToggle && mainNavigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNavigation.classList.toggle("is-open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen
        ? "Cerrar menú de navegación"
        : "Abrir menú de navegación"
    );
  });
}