const precos = [100, 100, 100, 50]
let menorPreco = precos[0];
let somaDosPrecos = 0

for (let preco of precos) {
  somaDosPrecos += preco
  if(menorPreco > preco) {
    menorPreco = preco
  }
}

if(precos.length >= 5) {
  somaDosPrecos -= menorPreco
}

console.log(somaDosPrecos)
