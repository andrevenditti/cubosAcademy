const resultados = ["V","E","V","E", "D"]
let pontos = 0

for (let resultado of resultados) {
  if(resultado === "V") {
    pontos += 3
  } else if (resultado === "E") {
    pontos += 1
  }
}
console.log(pontos)