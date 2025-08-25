const menuBtn = document.querySelector(".site-header__menu-toggle");
const nav = document.querySelector(".site-header__nav");

function setupNavToggle() {
  function toggleMenu() {
    const isOpen = menuBtn.classList.contains("site-header__menu-toggle--open");

    menuBtn.classList.toggle("site-header__menu-toggle--open");
    nav.classList.toggle("site-header__nav--visible"); // Toggle nav visibility
    menuBtn.setAttribute("aria-expanded", String(!isOpen));
    menuBtn.textContent = isOpen ? "☰" : "✖";
  }
  menuBtn.addEventListener("click", toggleMenu);
}

document.addEventListener("DOMContentLoaded", setupNavToggle);
