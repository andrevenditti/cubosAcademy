const texto = "lagola lagolola";

console.log(texto.indexOf("f"));

//saber se um email e valido
//tem que ter um @
//tem que tem pelo menos 1 ponto depois do @

const email = "lacolinha@fuavula.com";

//minha solucao
if (email.includes("@") && email.indexOf(".") > email.indexOf("@")) {
  console.log("email valido");
} else {
  console.log("email invalido");
}

//solucao do professor
const indexArroba = email.indexOf("@");

const indexPontoAposArroba = email.indexOf(".", indexArroba); //para ver se esta depois

if (indexPontoAposArroba > indexArroba) {
  console.log("email atende as requisicoes");
} else {
  console.log("Nao ha nenhum ponto apos arroba");
}
