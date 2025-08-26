const pathToJSON = "./assets/data/helloworldProgram.json";
const localStorageProgramDataKey = "programData";

async function loadProgramDataAndCache(pathToFile) {
  try {
    const response = await fetch(pathToFile);
    if (!response.ok) {
      throw new Error(`Network response is invalid: ${response.statusText}`);
    }
    const programData = await response.json();
    localStorage.setItem(
      localStorageProgramDataKey,
      JSON.stringify(programData),
    );

    return new Map(Object.entries(programData));
  } catch (error) {
    console.warn("File was not loaded cause: ", error);
    console.log("Will use fallback data");
    const fallbackData = {
      default: "console.log('Hej Världen!')",
    };
    localStorage.setItem(
      localStorageProgramDataKey,
      JSON.stringify(fallbackData),
    );
    return new Map(Object.entries(fallbackData));
  }
}

function getProgramDataFromCache() {
  const cacheData = localStorage.getItem("programData");

  if (!cacheData) {
    return null;
  }
  console.log("Loading Data from localStorage cache");
  const programData = JSON.parse(cacheData);
  return new Map(Object.entries(programData));
}

async function loadHelloProgramAsMap() {
  let programsMap = getProgramDataFromCache();

  if (!programsMap) {
    programsMap = await loadProgramDataAndCache(pathToJSON);
  }
  return programsMap;
}

export const DATAHELLOWORLD = loadHelloProgramAsMap();
