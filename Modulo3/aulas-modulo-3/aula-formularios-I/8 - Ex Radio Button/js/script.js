const radios = document.getElementsByName("type");
const inputCnpj = document.querySelector("#input-cnpj");
const inputCpf = document.querySelector("#input-cpf");

radios.forEach((radio) => {
  radio.addEventListener("change", (e) => {
    if (e.target.value === "company") {
      inputCnpj.classList.add("show");
      inputCpf.classList.remove("show");
    }
    if (e.target.value === "person") {
      inputCpf.classList.add("show");
      inputCnpj.classList.remove("show");
    }
  });
});
