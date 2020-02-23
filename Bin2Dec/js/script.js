const userInput = document.querySelector(".form-control");
const output = document.querySelector(".decimal-output");

document.addEventListener("keyup", e => {
  const decimal = Number("0b" + userInput.value);

  if (isNaN(decimal)) {
    output.value = "Invalid input!";
    userInput.classList.replace("valid", "invalid");
  } else {
    output.value = decimal;
    userInput.classList.replace("invalid", "valid");
  }
});
