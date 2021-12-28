let button = document.querySelector(".ball");

button.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

let menu = document.querySelector(".fa-align-justify");

menu.addEventListener("click", () => {
  document.querySelector(".pop-up").style.display = "unset";
});

exit = document.querySelector(".fa-times");

exit.addEventListener("click", () => {
  document.querySelector(".pop-up").style.display = "none";
});
