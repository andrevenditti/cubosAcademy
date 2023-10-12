const vodka =  {
  nome: "Stolichnaya", 
  precoUnit: 12300, 
  quantidade: 3
}

const whisky = {
  nome: "Jack Daniels", 
  precoUnit: 7500, 
  quantidade: 3
}
  
const cerveja = {
  nome: "Heineken", 
  precoUnit: 1500, 
  quantidade: 10
}

const produtosConsumidos = [vodka, whisky, cerveja]

const cartaoConsumo = {
  nomeCliente: "Alvaro",
  idadeCliente: 34,
  produtosConsumidos
}

let valorAPagar = 0

for (let valorProduto of produtosConsumidos) {
  valorAPagar += valorProduto.precoUnit * valorProduto.quantidade
}
const totalFormatado = (valorAPagar/100).toFixed(2)

console.log(`Ola senhor ${cartaoConsumo.nomeCliente}, agradecemos a preferencia por nossos servicos, o valor que o senhor deve pagar pelo que consumiu e de R$${totalFormatado} reais`)
