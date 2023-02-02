const precos = [30, 10, 54, 76, 1, 4, 35]
// const precos = [5, 10, 3]
let menorDiferenca = precos[0]
let diferencaAtual = 0

for(let i = 0; i < precos.length; i++) {
  for(let j = 0; j < precos.length; j++) {
    if(i < j){
      diferencaAtual = precos[i] - precos[j]
      if(menorDiferenca > diferencaAtual && diferencaAtual > 0) {
        menorDiferenca = diferencaAtual
      }
    }
  }
}
console.log(menorDiferenca)