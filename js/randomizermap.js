export function getRandomKey(mapObject) {
  if (!(mapObject instanceof Map)) {
    console.error("Provided input  must be of type Map");
    return undefined;
  }
  if (mapObject.size === 0) {
    console.warn("Provided Map is empty");
    return undefined;
  }

  const keysArray = Array.from(mapObject.keys());
  const randomIndex = Math.floor(Math.random() * keysArray.length);
  return keysArray[randomIndex];
}
