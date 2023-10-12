function solucao(lista) {
  //seu codigo aqui
  const cofre = lista.reduce((acc, init) => {
    return acc + init;
  });
  let mediaDiaria = cofre / lista.length;
  console.log(mediaDiaria);
}

const lista = [2, 3, 4];

solucao(lista);
