const header = document.querySelector(".site-header");

function showHeader() {
  header.classList.remove("site-header--hidden");
}

function hideHeader() {
  header.classList.add("site-header--hidden");
}

document.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    showHeader();
  } else {
    hideHeader();
  }
});
