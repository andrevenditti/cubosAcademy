// const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100]
const notas = [100, 100, 100, 50]
let notaFinal = 0
let menorNota = notas[0]
let maiorNota = notas[0]

for (let nota of notas) {
  if(menorNota > nota) {
    menorNota = nota
  } else if(maiorNota < nota) {
    maiorNota = nota
  }
  notaFinal += nota
}

notaFinal = (notaFinal - maiorNota - menorNota) / (notas.length - 2)
console.log(notaFinal)