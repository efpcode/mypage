const menuBtn = document.querySelector(".site-header__menu-toggle");
const nav = document.querySelector(".site-header__nav");

function toggleMenu() {
  const isOpen = menuBtn.classList.contains("is-open");

  menuBtn.classList.toggle("is-open");
  nav.classList.toggle("is-visible"); // Toggle nav visibility
  menuBtn.setAttribute("aria-expanded", String(!isOpen));
  menuBtn.textContent = isOpen ? "☰" : "✖";
}

menuBtn.addEventListener("click", toggleMenu);
