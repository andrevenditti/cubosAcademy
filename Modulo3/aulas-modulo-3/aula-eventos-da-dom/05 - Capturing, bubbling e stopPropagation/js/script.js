const body = document.querySelector("body");
const div = document.getElementById("wrap");
const p = document.querySelector(".hint");
const a = document.querySelector(".hint a");
const h1 = document.querySelector("h1");

body.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("click na body");
});

div.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("click na div");
});

p.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("click na p");
  h1.textContent = "clicou no p";
});

a.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("click na a");
  h1.textContent = "clicou no a";
});
