const vodka =  {
  nome: "Stolichnaya", 
  precoUnit: 123, 
  quantidade: 3
}

const whisky = {
  nome: "Jack Daniels", 
  precoUnit: 75, 
  quantidade: 3
}
  
const cerveja = {
  nome: "Heineken", 
  precoUnit: 15, 
  quantidade: 10
}

const produtosConsumidos = [vodka, whisky, cerveja]

const cartaoConsumo = {
  nomeCliente: "Alvaro",
  idadeCliente: 34,
  produtosConsumidos
}

console.log(`Nome do cliente: ${cartaoConsumo.nomeCliente}`)
console.log(`Idade do cliente: ${cartaoConsumo.idadeCliente}`)
cartaoConsumo.idadeCliente = "24"
console.log(`Idade do cliente: ${cartaoConsumo.idadeCliente}`)
console.log(`Nome primeiro produto: ${cartaoConsumo.produtosConsumidos[0].nome}`)
console.log(`Preco unitario do ultimo produto: ${cartaoConsumo.produtosConsumidos[produtosConsumidos.length -1 ].precoUnit}`)

