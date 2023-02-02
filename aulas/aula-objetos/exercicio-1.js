const pessoa = {
  nome: "Andre",
  idade: 26,
  altura: 1.76,
  temCNH: true,
  apelidos: ["pé", "pézão", "pépé", "dé", "Degas"]
}

const textoCNH = pessoa.temCNH ? "tem CNH" : "nao tem CNH"

console.log(`${pessoa.nome} tem ${pessoa.idade}, ${pessoa.altura}m de altura, ${textoCNH} e o seguintes apelidos:`)
for (let apelido of pessoa.apelidos) {
  console.log(`- ${apelido}`)
}