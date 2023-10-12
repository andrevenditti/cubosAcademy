const pessoa = {
  nome: "Andre",
  idade: 26,
  altura: 1.76,
  temCNH: true,
  apelidos: ["pé", "pézão", "pépé", "dé", "Degas"]
}

const {nome, ...rest} = pessoa;

console.log(rest)