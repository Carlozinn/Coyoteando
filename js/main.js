const currentYear = document.querySelector("#current-year");
const menuToggle = document.querySelector(".menu-toggle");
const mainNavigation = document.querySelector("#main-navigation");
const navigationLinks = document.querySelectorAll(".navigation-link");
const themeToggle = document.querySelector(".theme-toggle");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

const closeMenu = () => {
  if (!menuToggle || !mainNavigation) {
    return;
  }

  mainNavigation.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menú de navegación");
};

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

navigationLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

const savedTheme = localStorage.getItem("coyoteando-theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
}

const updateThemeButton = () => {
  if (!themeToggle) {
    return;
  }

  const isDarkMode = document.body.classList.contains("dark-mode");

  themeToggle.setAttribute("aria-pressed", String(isDarkMode));
  themeToggle.setAttribute(
    "aria-label",
    isDarkMode
      ? "Activar modo claro"
      : "Activar modo oscuro"
  );

  const icon = themeToggle.querySelector("span");

  if (icon) {
    icon.textContent = isDarkMode ? "☀" : "☾";
  }
};

if (themeToggle) {
  updateThemeButton();

  themeToggle.addEventListener("click", () => {
    const isDarkMode = document.body.classList.toggle("dark-mode");

    localStorage.setItem(
      "coyoteando-theme",
      isDarkMode ? "dark" : "light"
    );

    updateThemeButton();
  });
}

const filterButtons = document.querySelectorAll(".filter-button");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((filterButton) => {
      filterButton.classList.remove("is-active");
    });

    button.classList.add("is-active");

    productCards.forEach((card) => {
  const cardCategory = card.dataset.category;
  const shouldShow =
    selectedFilter === "all" || cardCategory === selectedFilter;

  card.style.display = shouldShow ? "" : "none";
});
  });
});