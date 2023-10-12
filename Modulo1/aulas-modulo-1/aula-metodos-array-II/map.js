const usuarios = [
  { nome: "Andre", sobrenome: "Moraes", idade: 26 },
  { nome: "Joao", sobrenome: "Bonollo", idade: 19 },
  { nome: "Amanda", sobrenome: "Saveiro", idade: 36 },
];

const nomeCompleto = usuarios.map(({ nome, sobrenome, idade }) => {
  // return nome + " " + sobrenome;
  return { nomeCompleto: `${nome} ${sobrenome}`, idade };
});

console.log(nomeCompleto);
