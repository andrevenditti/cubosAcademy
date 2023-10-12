// const numeros = [1, 2, 3, 4]

// const teste = numeros.every((elemento) => {
//   return elemento < 5
// })

// console.log(teste) //true

const frutas = ["abacaxi", "melancia", "maca", "abacate", "banana"];

const result = frutas.every((element) => {
  element !== "banana";
});

console.log(result); //false
