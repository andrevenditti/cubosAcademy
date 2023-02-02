const palavras = ["aveia","manha","ave"]
const primeiraLetra = "a" 
const segundaLetra = "v"
let encontrado = false

for (let palavra of palavras) {
  if(palavra[0] === primeiraLetra && palavra[1] === segundaLetra) {
    console.log(palavra)
    encontrado = true
  }
}
if(!encontrado) {
  console.log("NENHUMA")
}