function solucao(min, max, valores) {
  //seu codigo aqui
  const valoresPermitidos = valores.filter((valor) => {
    if (valor >= min && valor <= max) {
      return valor;
    } else {
      return;
    }
  });
  console.log(valoresPermitidos);
}

solucao(2, 10, [0, 5, 6, 10, 11]);
solucao(1, 1, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
