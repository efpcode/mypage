const toggleButton = document.querySelector(
  ".site-header__light-or-darkmode-toggle",
);

function updateSiteTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    toggleButton.setAttribute("aria-label", "Toggle light mode");
    toggleButton.setAttribute("aria-pressed", "true");
  } else {
    document.body.classList.remove("dark-mode");
    toggleButton.setAttribute("aria-label", "Toggle dark mode");
    toggleButton.setAttribute("aria-pressed", "false");
  }
}

// CSS class with dark-mode
function handleThemeToggle() {
  const isDarkMode = document.body.classList.contains("dark-mode");
  const newTheme = isDarkMode ? "light" : "dark";

  localStorage.setItem("theme", newTheme);
  updateSiteTheme(newTheme);
}
function setupDarkModeToggle() {
  if (toggleButton) {
    const savedTheme = localStorage.getItem("theme");
    const initialTheme = savedTheme || "dark";

    updateSiteTheme(initialTheme);
    toggleButton.addEventListener("click", handleThemeToggle);
  }
}

// Call the function to run the code
document.addEventListener("DOMContentLoaded", setupDarkModeToggle);
