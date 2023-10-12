function soma(...rest) {
  const somaNumeros = rest.reduce((acc, cur) => acc + cur);

  return somaNumeros;
}

console.log(soma(1, 2, 3, 4));
