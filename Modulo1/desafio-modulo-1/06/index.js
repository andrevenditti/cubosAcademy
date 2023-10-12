function solucao(lista) {
  // seu codigo aqui
  if (lista.length < 0 || lista.length > 1000) {
    return;
  }

  let menorIdade = lista[0];
  let maisNova = lista.reduce((acc, init) => {
    if (menorIdade < 18) {
      menorIdade = init;
    }
    if (init < menorIdade && init >= 18) {
      menorIdade = init;
    }
    return menorIdade;
  });

  if (maisNova < 18) {
    console.log("CRESCA E APARECA");
  } else {
    console.log(maisNova);
  }
}

const lista = [12, 32, 27, 34, 48];
solucao(lista);
