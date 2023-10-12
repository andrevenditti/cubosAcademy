const produtos = [
  { nome: "Arroz", preco: 5000 },
  { nome: "Frango", preco: 2500 },
  { nome: "Feijao", preco: 1000 },
  { nome: "Ovo", preco: 250 },
];

const produtoComDesconto = produtos.map(({ nome, preco }) => {
  const desconto = preco * 0.1;
  return { nome, preco, desconto };
});

console.log(produtoComDesconto);
