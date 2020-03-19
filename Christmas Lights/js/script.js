const $ = document;

const startBtn = $.querySelector(".start");
const stopBtn = $.querySelector(".stop");

let selectedLight = null;
const selectedSize = $.querySelector(".light-size");
const selectedColor = $.querySelector(".light-color");
const selectedIntensity = $.querySelector(".light-intensity");
const selectedDuration = $.querySelector(".light-duration");
const colorApply = $.querySelector(".apply-color");

$.querySelectorAll(".a").forEach(el => {
  el.addEventListener("click", ev => {
    if (selectedLight) selectedLight.style.border = "";

    selectedLight = ev.target;
    selectedLight.style.border = "2px solid lightyellow";

    setInterval(() => {
      selectedLight.style.border = "";
    }, 10000);
  });
});

startBtn.addEventListener("click", e => {
  $.querySelectorAll("span").forEach(el => {
    el.classList.replace("a", "blink");
  });
});

stopBtn.addEventListener("click", e => {
  $.querySelectorAll("span").forEach(el => {
    el.classList.replace("blink", "a");
  });
});

selectedSize.addEventListener("input", () => {
  if (!selectedLight) return;

  selectedLight.style.width = selectedSize.value + "px";
  selectedLight.style.height = selectedSize.value + "px";
});

colorApply.addEventListener("click", () => {
  if (!selectedLight) return;

  selectedLight.style.backgroundColor = selectedColor.value;
  selectedLight.style.boxShadow = `0px 0px 25px 1px ${selectedColor.value}`;
});

selectedIntensity.addEventListener("input", () => {
  if (!selectedLight) return;

  selectedLight.style.boxShadow = `0px 0px 25px ${selectedIntensity.value}px ${
    getComputedStyle(selectedLight).backgroundColor
  }`;
});

selectedDuration.addEventListener("input", () => {
  if (!selectedLight) return;

  selectedLight.style.animationDuration = selectedDuration.value + "s";
});
