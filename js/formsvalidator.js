const allFormsGroups = document.querySelectorAll(".form__group");
const cancelButton = document.querySelector("#cancel-button");
const submitButton = document.querySelector("#submit-button");
const form = document.querySelector(".form");

function removeAllEnterData(event) {
  event.preventDefault();
  form.reset();
  allFormsGroups.forEach((formGroup) => {
    const errorMessage = document.querySelector("small");
    if (errorMessage) {
      errorMessage.innerText = "";
    }

    form.scrollIntoView({ behavior: "smooth" });
  });
}

function initialFormCheck() {
  allFormsGroups.forEach((formGroup) => {
    const input = formGroup.querySelector("input, select, textarea");
    if (input && input.hasAttribute("required")) {
      const label = formGroup.querySelector(".form__label");
      if (label) {
        label.innerText = "* " + label.innerText;
      }
    }
  });
}

function formIsEmpty(value) {
  return value.trim() === "";
}

function isEmailValid(email) {
  const regexEmail = /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+$/;
  const minLength = 8;
  return regexEmail.test(email) && email.length >= minLength;
}

function isTextRange(value) {
  return value >= 6 && value <= 240;
}

function isNameValid(name) {
  const nameRegex = /^[a-zA-Z ]+$/;
  const minLength = 6;
  return nameRegex.test(name) && name.length >= minLength;
}

function fieldValidator(inputDataForm) {
  let fieldIsValid = true;
  let newErrorMessage = "";

  if (formIsEmpty(inputDataForm.value)) {
    newErrorMessage =
      inputDataForm.name === "form-subject"
        ? "Selection is required"
        : "This field is required";
    fieldIsValid = false;
  }

  if (fieldIsValid) {
    if (inputDataForm.name === "email" && !isEmailValid(inputDataForm.value)) {
      newErrorMessage =
        "Field detected incorrect email and minium length is 8 characters.";
      fieldIsValid = false;
    } else if (
      inputDataForm.name === "full-name" &&
      !isNameValid(inputDataForm.value)
    ) {
      newErrorMessage = "Please enter atleast 6 letters, a-z or A-Z or space.";
      fieldIsValid = false;
    } else if (
      inputDataForm.name === "textarea" &&
      !isTextRange(inputDataForm.value.length)
    ) {
      newErrorMessage = "Expected character range is from 6 to 240.";
      fieldIsValid = false;
    }
  }

  return { isValid: fieldIsValid, message: newErrorMessage };
}

function fieldCheckRealTime() {
  const isFormValid = loopFormValues();
  submitButton.disabled = !isFormValid;
  submitButton.classList.toggle("form__button--primary-disabled", !isFormValid);
}

function loopFormValues() {
  let isFormValid = true;
  allFormsGroups.forEach((formGroup) => {
    const inputDataForm = formGroup.querySelector("input, select, textarea");
    const errorMessage = formGroup.querySelector("small");

    if (inputDataForm) {
      const formValidation = fieldValidator(inputDataForm);

      errorMessage.innerText = formValidation.message;
      errorMessage.classList.toggle(
        "form__help-text--visible",
        formValidation.message !== "",
      );

      if (!formValidation.isValid) {
        isFormValid = false;
      }
    }
  });
  return isFormValid;
}

function whenPressingSubmit(event) {
  event.preventDefault();

  const isFormValid = loopFormValues();

  if (isFormValid) {
    const thxMessage = document.createElement("h3");
    thxMessage.innerText = "Thank your for contacting me Hope to meet up soon.";
    thxMessage.classList.add("form__success-message");

    const thxMessageExists = form.querySelector(".form__success-message");

    if (!thxMessageExists) {
      form.appendChild(thxMessage);
    }

    allFormsGroups.forEach((group) => {
      group.classList.add("hidden");
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initialFormCheck();
  if (form) {
    form.addEventListener("input", fieldCheckRealTime);
    form.addEventListener("keyup", fieldCheckRealTime);
    form.addEventListener("change", fieldCheckRealTime);
    form.addEventListener("submit", whenPressingSubmit);
  }
  if (cancelButton) {
    cancelButton.addEventListener("click", removeAllEnterData);
    cancelButton.addEventListener("touchstart", removeAllEnterData);
  }
});
