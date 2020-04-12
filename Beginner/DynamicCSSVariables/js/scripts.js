const warningBox = document.querySelector(".warning");
const loginForm = document.querySelector(".login-form");
const [login, password, button] = loginForm.children;

const backend = {
  myuser: {
    password: "mypassword",
  },
};

loginForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  checkLogin();
});

loginForm.addEventListener("keyup", (ev) => {
  login.value.indexOf(" ") != -1
    ? (login.style.backgroundColor = "#fcfc73")
    : (login.style.backgroundColor = "#eeeeeeb9");

  password.value.indexOf(" ") != -1
    ? (password.style.backgroundColor = "#fcfc73")
    : (password.style.backgroundColor = "#eeeeeeb9");

  if (password.value.indexOf(" ") != -1 || login.value.indexOf(" ") != -1)
    warning("You cannot use spaces.");
  else clearWarning();
});

function warning(text) {
  button.disabled = true;
  warningBox.innerHTML = `<h4>Warning!</h4> ${text}`;
  warningBox.style.top = "0px";
}

function clearWarning() {
  button.disabled = false;
  warningBox.style.top = "-55px";
}

function checkLogin() {
  if (backend[login.value]) {
    login.style.backgroundColor = "#eeeeeeb9";
    checkPassword();
    return;
  }
  login.style.backgroundColor = "#ff6347be";
  warning("User not registered.");
  setTimeout(() => {
    clearWarning();
  }, 3000);
  return;
}

function checkPassword() {
  if (backend[login.value].password == password.value) {
    logged();
    return;
  }
  password.style.backgroundColor = "#ff6347be";
  warning("Wrong password.");
  setTimeout(() => {
    clearWarning();
  }, 3000);
  return;
}

function logged() {
  document.querySelector(".form-holder").style.visibility = "hidden";

  setInterval(() => {
    let d = document.createElement("div");
    let b = document.querySelector("body");
    d.style.right = Math.round(Math.random() * 100) + "%";
    d.style.backgroundColor = "#" + Math.round(Math.random() * 999999);
    d.className = "box up";
    b.appendChild(d);
    setTimeout(() => {
      b.removeChild(d);
    }, 2000);
  }, 1000);
}
