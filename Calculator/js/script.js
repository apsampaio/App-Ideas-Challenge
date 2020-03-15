const display = document.querySelector(".calc-display");

document.querySelectorAll("span").forEach(input => {
  input.addEventListener("click", e => {
    const input = e.target.innerText;
    display.innerText = input + display.innerText;
    console.log(input);
  });
});
