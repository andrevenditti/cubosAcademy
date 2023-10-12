const usuarios = [
  { id: 11, nome: "joao", idade: 23 },
  { id: 2, nome: "maria", idade: 19 },
  { id: 4, nome: "ana", idade: 23 },
  { id: 1, nome: "rodrigo", idade: 53 },
  { id: 123, nome: "jamelao", idade: 43 },
];

usuarios.sort((el1, el2) => {
  return el1.id - el2.id;
});

console.log(usuarios);

usuarios.sort((el1, el2) => {
  return el2.id - el1.id;
});

console.log(usuarios);
