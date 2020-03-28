const displayCurrent = document.querySelector(".display-current");
const displayLast = document.querySelector(".display-last");
let fValue = "";
let sValue = "";
let lValue = null;
let operator = null;

const makeResult = {
  "÷": () => {
    return Number(fValue) / Number(sValue);
  },
  "×": () => {
    return Number(fValue) * Number(sValue);
  },
  "-": () => {
    return Number(fValue) - Number(sValue);
  },
  "+": () => {
    return Number(fValue) + Number(sValue);
  }
};

document.querySelectorAll("span").forEach(input => {
  input.addEventListener("click", e => {
    const input = e.target.innerText;
    handleInput(input);
  });
});

function handleInput(input) {
  switch (input) {
    case "÷":
    case "×":
    case "-":
    case "+":
      handleOperator(input);
      break;
    case "C":
      clearDisplay();
      break;
    case "=":
      displayResult();
      break;
    default:
      handleValue(input);
      break;
  }
}

function handleValue(value) {
  if ((lValue != null && !operator) || displayCurrent.innerText == "Err") {
    clearDisplay();
  }
  if (!operator) {
    if (fValue.length > 7) return;
    fValue += value;
  } else {
    if (sValue.length > 7) return;
    sValue += value;
  }
  displayCurrent.innerText += value;
}

function handleOperator(input) {
  if (lValue != null) fValue = lValue;
  if (lValue % 1 > 0) {
    lValue = lValue.toFixed(2);
    displayCurrent.innerText = lValue;
  }
  if (!fValue) return;
  if (!operator) {
    operator = input;
    displayCurrent.innerText += input;
  } else {
    if (preventErr()) return;
    displayResult();
    return;
  }
}

function clearDisplay() {
  displayCurrent.innerText = "";
  displayLast.innerText = "";
  operator = null;
  fValue = "";
  sValue = "";
  lValue = null;
}

function displayResult() {
  if (preventErr()) return;
  lValue = makeResult[operator]();
  if (lValue > 99999999 || isNaN(lValue)) {
    displayCurrent.innerText = "Err";
    lValue = null;
  } else {
    displayCurrent.innerText = lValue;
    displayLast.innerText = `${fValue} ${operator} ${sValue}`;
  }
  operator = null;
  fValue = "";
  sValue = "";
}

function preventErr() {
  if (!fValue || !sValue) return true;
  return false;
}
