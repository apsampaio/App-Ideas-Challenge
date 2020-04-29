const holder = document.querySelector(".cards-holder");
const btn = document.querySelector("button");

btn.addEventListener("click", getStatus);

const statusColor = {
  operational: "#2ecc40",
  degraded_performance: "#0074d9",
  partial_outage: "#fca624",
  major_outage: "#FF4136",
};

getStatus();

async function getStatus() {
  const response = await axios.get(
    "https://kctbh9vrtdwd.statuspage.io/api/v2/summary.json"
  );
  holder.innerText = "";
  response.data.components.forEach((e) => {
    createCard(e);
  });
}

function createCard({ name, description, status }) {
  const card = document.createElement("div");
  const img = document.createElement("img");
  const h3 = document.createElement("h3");
  const span = document.createElement("span");
  const p = document.createElement("p");

  card.className = "card";
  img.src = `src/img/${status}.png`;
  h3.innerText = name;
  span.innerText = description;
  p.innerText = status;
  p.style.backgroundColor = statusColor[status];

  card.appendChild(img);
  card.appendChild(h3);
  card.appendChild(span);
  card.appendChild(p);
  holder.appendChild(card);
}
