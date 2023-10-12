//
function solucao(numeros) {
  //seu codigo aqui
  let goleiro = 0;
  let valorContado = numeros.reduce((acc, init) => {
    return acc + init;
  });

  for (let i = 0; i < valorContado; i++) {
    if (goleiro > numeros.length - 1) {
      goleiro = 0;
    }
    goleiro++;
  }
  console.log(goleiro);
}

const numeros = [1, 3, 2, 1];

solucao(numeros);
