const usuarios = [
  {
    nome: "Andre",
    idade: 26,
  },
  {
    nome: "Jamelao",
    idade: 23,
  },
  {
    nome: "Amanda",
    idade: 25,
  },
  {
    nome: "Roberto",
    idade: 21,
  },
];

function fiscalizarFesta(usuarios) {
  const resultado = usuarios.every((client) => {
    return client.idade >= 18;
  });

  if (resultado) {
    console.log("Festa liberada!");
  } else {
    console.log("Possui menor de idade");
  }
}

fiscalizarFesta(usuarios);
