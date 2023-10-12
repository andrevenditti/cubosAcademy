const compra = {
  produtos: [
    {
      valor: 1000,
      quantidade: 2,
      categoria: "SALGADO",
    },
    {
      valor: 1000,
      quantidade: 1,
      categoria: "BEBIDA",
    },
  ],
  distanciaRestaurante: 30,
  cupomDesconto: "NATAL30",
  ehPrimeiraCompra: true,
};

let valorTotal = 0;
let calcularFrete = true;
const { produtos } = compra;

for (let produto of produtos) {
  if (produto.categoria === "SALGADO") {
    valorTotal += produto.valor * produto.quantidade * 0.9;
  } else if (produto.categoria === "DOCE") {
    valorTotal += produto.valor * produto.quantidade * 0.85;
  } else if (produto.categoria === "BEBIDA") {
    valorTotal += produto.valor * produto.quantidade * 0.7;
  }
}

if (!compra.ehPrimeiraCompra) {
  valorTotal;
} else if (compra.cupomDesconto === "NATALSUPREMO" && valorTotal >= 8000) {
  valorTotal *= 0.7;
  !calcularFrete;
} else if (compra.cupomDesconto === "NATAL30" && valorTotal >= 6000) {
  valorTotal *= 0.7;
} else if (compra.cupomDesconto === "NATAL20" && valorTotal >= 4500) {
  valorTotal *= 0.8;
} else if (compra.cupomDesconto === "NATAL10" && valorTotal >= 3000) {
  valorTotal *= 0.9;
}

if (calcularFrete) {
  valorTotal += compra.distanciaRestaurante * 120;
}

console.log(valorTotal);
