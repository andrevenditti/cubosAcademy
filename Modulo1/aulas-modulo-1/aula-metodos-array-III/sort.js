const numeros = [1, 30, 5, 2, 3, 52, 1];

//ordenacao crescente
// numeros.sort((a, b) => {
//   return a - b;
// });

numeros.sort((a, b) => {
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
});
console.log(numeros);

//ordenacao decrescente
// numeros.sort((a, b) => {
//   return b - a;
// });

numeros.sort((a, b) => {
  if (a < b) {
    return 1;
  }

  if (a > b) {
    return -1;
  }

  return 0;
});

console.log(numeros);
