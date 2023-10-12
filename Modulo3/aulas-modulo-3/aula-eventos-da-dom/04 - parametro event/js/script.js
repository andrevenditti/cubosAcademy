const input = document.querySelector("input");
const button = document.querySelector("button");

function save(event) {
  console.log(event);
}

input.addEventListener("change", (event) => {
  console.log(event);
});

button.addEventListener("click", save);
