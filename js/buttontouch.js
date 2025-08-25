const headerButtons = document.querySelectorAll(".site-header__button");

function setupButtonBGColor() {
  function touchedButtonStart(event) {
    const button = event.currentTarget;
    button.classList.add("site-header__button--touched");
  }

  function touchedButtonEnd(event) {
    const button = event.currentTarget;
    setTimeout(() => {
      button.classList.remove("site-header__button--touched");
      button.blur();
    }, 300);
  }

  if (headerButtons) {
    headerButtons.forEach((button) => {
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
document.addEventListener("DOMContentLoaded", setupButtonBGColor);
