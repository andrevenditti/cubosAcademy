const array = [0, 1, 2, 3, 4];

const resultado = array.reduce((acc, init, index, array) => {
  console.log(acc, init, index, array);
  return acc + init;
});

console.log(resultado);

const resultado2 = array.reduce((acc, init, index, array) => {
  console.log(acc, init, index, array);
  return acc + init;
}, 10); //10 e o valor inicial do acumulador

console.log(resultado2);

//como funciona o reduce

let somaTotal = array[0];

for (let i = 1; i < array.length; i++) {
  const elementoAtual = array[i];

  somaTotal += elementoAtual;
}

console.log(somaTotal);
