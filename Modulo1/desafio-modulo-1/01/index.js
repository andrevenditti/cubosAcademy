function solucao(lista) {
  //seu codigo aqui
  if (lista.length > 1000) {
    return;
  }
  const cofre = lista.reduce((acc, init) => {
    return acc + init;
  });
  console.log(cofre);
}

const lista = [1, 2, 3, 4];

solucao(lista);
