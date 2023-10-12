function solucao(jogadores) {
  // const { nome, jogada } = jogadores;

  const sorteado0 = jogadores.filter(({ jogada }) => {
    return jogada === 0;
  });
  const sorteado1 = jogadores.filter(({ jogada }) => {
    return jogada === 1;
  });

  if (sorteado0.length < sorteado1.length && sorteado0.length === 1) {
    return console.log(sorteado0[0].nome);
  } else if (sorteado1.length < sorteado0.length && sorteado1.length === 1) {
    return console.log(sorteado1[0].nome);
  } else {
    return console.log("NINGUEM");
  }
}

const jogadores = [
  {
    nome: "Herman",
    jogada: 1,
  },
  {
    nome: "Rhodes",
    jogada: 1,
  },
  {
    nome: "Beach",
    jogada: 1,
  },
  {
    nome: "Laurel",
    jogada: 0,
  },
  {
    nome: "Beatrice",
    jogada: 1,
  },
  {
    nome: "Alison",
    jogada: 1,
  },
  {
    nome: "Saundra",
    jogada: 0,
  },
  {
    nome: "Klein",
    jogada: 1,
  },
];
solucao(jogadores);
