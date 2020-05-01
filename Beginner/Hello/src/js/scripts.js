const section = document.querySelector("section");
const greetings = document.querySelector(".greetings");
const form = document.querySelector("form");
const greet = document.querySelector(".hello");
const user = document.querySelector(".user");
const message = document.querySelector(".message");
const logout = document.querySelector(".logout");

getCode();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  user.innerText = e.target[0].value;
  fadeOutForm();
});

async function getCode() {
  const {
    data: { countryCode },
  } = await axios.get("http://ip-api.com/json/?fields=status,countryCode");
  axios
    .get(`https://fourtonfish.com/hellosalut/?cc=${countryCode}`)
    .then(({ data: { hello } }) => {
      const decode = document.createElement("textarea");
      decode.innerHTML = hello;
      greet.innerText = decode.value;
    });
}

function fadeOutForm() {
  form.className = "fadeOut";
  section.style.width = "600px";
  section.style.height = "250px";
  section.style.left = "calc(50% - 300px)";
  section.style.bottom = "calc(50% - 125px)";

  setTimeout(() => {
    form.style.display = "none";
    greetings.style.display = "block";
  }, 850);
}

logout.addEventListener("click", (e) => {
  message.innerText = `Have a great day ${user.innerText}!`;

  user.className += " fadeOut";
  greet.className += " fadeOut";
  logout.className += " fadeOut";

  section.style.height = "200px";
  section.style.left = "calc(50% - 300px)";
  section.style.bottom = "calc(50% - 100px)";

  setTimeout(() => {
    user.style.visibility += "hidden";
    greet.style.visibility += "hidden";
    logout.style.visibility += "hidden";
  }, 850);
});
