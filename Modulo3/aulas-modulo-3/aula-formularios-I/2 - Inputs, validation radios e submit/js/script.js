const form = document.querySelector("form");
// const radios = document.querySelectorAll("input[name='period']");
const radios = document.getElementsByName("period");
const inputEmail = document.querySelector("#input-email");

// for (const radio of radios) {
//   radio.addEventListener("change", (e) => {
//     console.log(`o periodo selecionado foi ${e.target.value}`);
//   });
// }

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (inputEmail.value.indexOf("gmail") === -1) {
    console.log("email invalido");
  }

  for (const radio of radios) {
    if (radio.checked) {
      console.log(`o periodo selecionado foi o ${radio.value}`);
    }
  }
});

inputEmail.addEventListener("keyup", (e) => {
  if (e.target.value.indexOf("gmail") === -1) {
    console.log("email invalido");
    return;
  }
  console.log("email valido");
});
