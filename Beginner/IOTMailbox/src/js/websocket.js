const ip = "192.168.0.9:81";
let Socket = null;

const buttons = document.querySelector(".buttons");
const loading = document.querySelector(".spinner-border");

connect();

function connect() {
  Socket = new WebSocket(`ws://${ip}`);
  Socket.onmessage = (e) => {
    handleMessage(e.data.slice(0, -1));
  };
  Socket.onclose = (e) => {
    buttons.style.visibility = "hidden";
    loading.style.visibility = "visible";
    connect();
  };
  Socket.onopen = (e) => {
    buttons.style.visibility = "visible";
    loading.style.visibility = "hidden";
  };
  Socket.onerror = (e) => {
    console.log(e);
  };
}

function handleMessage(message) {
  switch (message) {
    case "BOX OPENED":
      log("NODEMCU", "MailBox opened!");
      break;
    case "BOX CLOSED":
      log("NODEMCU", "MailBox closed!");
      noMail();
      break;
    case "MAIL":
      log("NODEMCU", "You have a mail!");
      newMail();
      break;
  }
}
