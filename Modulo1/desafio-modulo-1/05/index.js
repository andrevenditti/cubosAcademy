function solucao(carta) {
  //seu codigo aqui
  const cartas = ["Q", "J", "K", "A", "2", "3"];

  for (let i = 0; i < cartas.length; i++) {
    if (carta === "3") {
      return console.log(cartas[0]);
    } else if (carta === cartas[i]) {
      return console.log(cartas[i + 1]);
    }
  }
}

solucao("3");
