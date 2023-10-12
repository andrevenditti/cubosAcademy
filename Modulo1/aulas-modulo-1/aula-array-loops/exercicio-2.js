const numeros = [0, 1, 2, 3, 4]
let soma = 0

for (let numero of numeros) {
  console.log(numero)
}
//--------------------------------
for (let numero of numeros) {
  soma += numero
}

console.log(soma)