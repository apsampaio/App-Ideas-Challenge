const sidebar = document.querySelector(".sidebar");
const flagMail = document.querySelector(".animate-flag");
const startBtn = document.querySelector(".btn-outline-primary");
const stopBtn = document.querySelector(".btn-outline-danger");
const resetBtn = document.querySelector(".btn-outline-success");
const wifi = document.querySelector("img");

let isMonitoring = false;

function log(sender, message) {
  const toast = document.createElement("div");

  toast.innerHTML = `
        <div
        class="toast show margin-toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div class="toast-header">
          <strong class="mr-auto">${sender}</strong>
          <small>${new Date().toString().slice(0, 24)}</small>
        </div>
        <div class="toast-body">
          ${message}
        </div>
      </div>
  `;
  sidebar.appendChild(toast);
}

function newMail() {
  flagMail.className = flagMail.className.replace("noMail", "newMail");
  setTimeout(() => {
    flagMail.style.transform = "rotate(0deg)";
  }, 499);
}

function noMail() {
  flagMail.className = flagMail.className.replace("newMail", "noMail");
  setTimeout(() => {
    flagMail.style.transform = "rotate(90deg)";
  }, 499);
}

startBtn.addEventListener("click", (e) => {
  log("User", "Started monitoring.");
  wifi.style.opacity = "1";
  Socket.send("1");
  startBtn.disabled = true;
  stopBtn.disabled = false;
});

stopBtn.addEventListener("click", (e) => {
  log("User", "Stopped monitoring.");
  Socket.send("0");
  wifi.style.opacity = "0";
  startBtn.disabled = false;
  stopBtn.disabled = true;
});

resetBtn.addEventListener("click", (e) => {
  sidebar.innerHTML = "";
  log("User", "Monitoring reset.");
  noMail();
});
