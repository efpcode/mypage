import { DATAHELLOWORLD } from "./jsonloader.js";
import { getRandomKey } from "./randomizermap.js";

const codeBlock = document.querySelector("#typewriter");

function clenupTxt() {
  if (codeBlock.textContent.length > 0) {
    codeBlock.textContent = "";
    codeBlock.classList.remove("typing-done");
  }
}

function typeWriter(text) {
  let index = 0;
  let letters = "";
  codeBlock.classList.remove("typing-done");

  let interval = setInterval(() => {
    if (index < text.length) {
      letters += text.charAt(index);
      codeBlock.textContent = letters;
      index++;
    } else {
      clearInterval(interval);
      codeBlock.classList.add("typing-done");
    }
  }, 100);
}

async function typingAnimation() {
  const programMap = await DATAHELLOWORLD;

  if (!programMap) {
    console.error("Faile to load program data");
    return;
  }

  setInterval(() => {
    const randomKey = getRandomKey(programMap);
    const code = programMap.get(randomKey);
    typeWriter(code);

    setTimeout(() => {
      clenupTxt();
    }, 5000);
  }, 6000);
}
document.addEventListener("DOMContentLoaded", typingAnimation);
