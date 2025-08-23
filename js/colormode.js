const toggleButton = document.querySelector(
  ".site-header__light-or-darkmode-toggle",
);

// CSS class with dark-mode
function toggleBodyClass() {
  const previousMode = toggleButton.getAttribute("aria-expanded");
  const currentMode = previousMode === "dark-mode" ? "light-mode" : "dark-mode";
  toggleButton.setAttribute("aria-expanded", currentMode);
  document.body.classList.toggle("dark-mode");
}
function setupDarkModeToggle() {
  if (toggleButton) {
    toggleButton.addEventListener("click", toggleBodyClass);
  }
}

// Call the function to run the code
document.addEventListener("DOMContentLoaded", setupDarkModeToggle);
