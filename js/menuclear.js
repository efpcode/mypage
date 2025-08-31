const selectMenu = document.querySelector("#form-subject");

function clearAutoPick() {
  if (selectMenu) {
    selectMenu.value = "";
  }
}

document.addEventListener("DOMContentLoaded", clearAutoPick);
