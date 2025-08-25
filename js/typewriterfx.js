const codeBlock = document.querySelector("#typewriter");
let code = "print('Hello World!')";

function clenupTxt() {
  if (codeBlock.textContent.length > 0) {
    codeBlock.textContent = "";
  }
}

function typeWriter(text) {
  let index = 0;
  let letters = "";
  let interval = setInterval(() => {
    if (index < text.length) {
      letters += text.charAt(index);
      codeBlock.textContent = letters;
      index++;
    } else {
      clearInterval(interval);
    }
  }, 100);
}

setInterval(() => {
  typeWriter(code);

  setTimeout(() => {
    clenupTxt();
  }, 5000);
}, 6000);
