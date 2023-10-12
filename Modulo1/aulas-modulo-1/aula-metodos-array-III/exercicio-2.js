const carros = [
  { nome: "corola", marca: "toyota", ano: "2011", cor: "prata" },
  { nome: "gol", marca: "wolkswagem", ano: "2023", cor: "preto" },
  { nome: "ranger", marca: "ford", ano: "2019", cor: "cinza" },
  { nome: "hilux", marca: "toyota", ano: "2010", cor: "vermelho" },
];

function ordenacao(carros, ordem) {
  carros.sort((a, b) => {
    return a[ordem].localeCompare(b[ordem]);
  });
}

ordenacao(carros, "cor");

console.log(carros);
