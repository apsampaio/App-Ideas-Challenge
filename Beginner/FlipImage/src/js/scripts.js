const btns = document.querySelectorAll("button");
const imgs = document.querySelectorAll("img");
const input = document.querySelector("input");
const def = "https://picsum.photos/200";

placeImage(def);

document.querySelector("form").addEventListener("submit", (ev) => {
  ev.preventDefault();
});

function placeImage(link) {
  imgs.forEach((img) => {
    img.style.transform = "rotateX(0deg) rotateY(0deg)";
    img.src = link;
    img.onerror = (err) => {
      img.src = def;
    };
  });
}

btns.forEach((btn) => {
  btn.addEventListener("click", (ev) => {
    const clicked = ev.target;
    action[clicked.innerText](clicked.parentElement.id);
  });
});

const action = {
  UP(index) {
    imgs[index].style.transform = imgs[index].style.transform.replace(
      "rotateX(180deg)",
      "rotateX(0deg)"
    );
  },
  RIGHT(index) {
    imgs[index].style.transform = imgs[index].style.transform.replace(
      "rotateY(180deg)",
      "rotateY(0deg)"
    );
  },
  DOWN(index) {
    imgs[index].style.transform = imgs[index].style.transform.replace(
      "rotateX(0deg)",
      "rotateX(180deg)"
    );
  },
  LEFT(index) {
    imgs[index].style.transform = imgs[index].style.transform.replace(
      "rotateY(0deg)",
      "rotateY(180deg)"
    );
  },
  Display() {
    placeImage(input.value);
  },
};
