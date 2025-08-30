const header = document.querySelector(".site-header");
const mediaQueryResponse = window.matchMedia("(min-width: 667px)");
let isMobile = null;

function showHeader() {
  header.classList.remove("site-header--hidden");
}

function hideHeader() {
  header.classList.add("site-header--hidden");
}

function headerToggle() {
  if (window.scrollY > 50) {
    showHeader();
  } else {
    hideHeader();
  }
}

function setupHeaderToggleMode() {
  const isNowTablet = mediaQueryResponse.matches;
  if (isMobile === isNowTablet) {
    return;
  }
  document.removeEventListener("scroll", headerToggle);

  if (!isNowTablet) {
    console.log("Mobile Header");
    document.addEventListener("scroll", headerToggle);
    headerToggle();
  } else {
    console.log("Static Desktop Header");
    showHeader();
  }
  isMobile = isNowTablet;
}

document.addEventListener("DOMContentLoaded", () => {
  setupHeaderToggleMode();
  window.addEventListener("resize", setupHeaderToggleMode);
});
