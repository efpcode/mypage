const headerButtons = document.querySelectorAll(".site-header__button");
const formButtons = document.querySelectorAll(".form__button");

function touchedButtonStart(event) {
  const button = event.currentTarget;
  if (button.classList.contains("site-header__button")) {
    button.classList.add("site-header__button--touched");
  } else if (button.classList.contains("form__button")) {
    button.classList.add("form__button--touched");
  }
}

function touchedButtonEnd(event) {
  const button = event.currentTarget;
  if (event.type.startsWith("touch")) {
    setTimeout(() => {
      button.classList.remove("site-header__button--touched");
      button.classList.remove("form__button--touched");
      button.blur();
    }, 300);
  } else {
    button.classList.remove("site-header__button--touched");
    button.classList.remove("form__button--touched");
    button.blur();
  }
}

function setupEventListeners(buttons) {
  if (buttons) {
    buttons.forEach((button) => {
      const startEvents = ["mouseenter", "click", "touchstart"];
      const endEvents = ["mouseleave", "mouseup", "touchend", "touchcancel"];

      startEvents.forEach((evt) =>
        button.addEventListener(evt, touchedButtonStart),
      );
      endEvents.forEach((evt) =>
        button.addEventListener(evt, touchedButtonEnd),
      );
    });
  }
}
document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners(headerButtons);
  setupEventListeners(formButtons);
});
