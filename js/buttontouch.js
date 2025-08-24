const headerButtons = document.querySelectorAll(".site-header__button");

function touchedButtonStart(event) {
  isScrolling = false;
  const button = event.currentTarget;
  button.classList.add("site-header__button--touched");
  console.log("Touch started");
}

function touchedButtonEnd(event) {
  const button = event.currentTarget;
  setTimeout(() => {
    button.classList.remove("site-header__button--touched");
    button.blur();
    console.log("Touch end");
  }, 300);
}

if (headerButtons) {
  headerButtons.forEach((button) => {
    button.addEventListener("pointerdown", touchedButtonStart);
    button.addEventListener("pointerup", touchedButtonEnd);
    button.addEventListener("pointerleave", touchedButtonEnd);
  });
}
