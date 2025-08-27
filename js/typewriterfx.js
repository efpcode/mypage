import { loadHelloProgramAsMap } from "./jsonloader.js";
import { getRandomKey } from "./randomizermap.js";

const codeBlock = document.querySelector("#typewriter");
const localStorageProgramDataKey = "programData";
const localStorageProgramDataState = "programDataLoaded";
const retryDealy = (60 / 60) * 5 * 1000;

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
  let programMap = await loadHelloProgramAsMap();

  if (localStorage.getItem(localStorageProgramDataState) === "false") {
    console.log("Data not fully loaded. Offering manual retry.");
    setTimeout(() => {
      if (
        confirm(
          "Could not load full program data. Try again or continue with fallback data?",
        )
      ) {
        console.log(
          "Data not fully loaded. Clearing cache and scheduling retry.",
        );
        localStorage.removeItem(localStorageProgramDataKey);
        localStorage.removeItem(localStorageProgramDataState);
        window.location.reload();
      }
    }, retryDealy);
  }

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
