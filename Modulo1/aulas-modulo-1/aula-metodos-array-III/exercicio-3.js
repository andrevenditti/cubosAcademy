const users = [
  { id: 11, nome: "joao", idade: 33 },
  { id: 2, nome: "maria", idade: 13 },
  { id: 4, nome: "joana", idade: 38 },
  { id: 1, nome: "jorge", idade: 27 },
  { id: 123, nome: "jamil", idade: 41 },
];

//minha solucao
// let olderUser = users[0];
// const olderUsers = users.reduce((acc, init, index, array) => {
//   if (array[index].idade > olderUser.idade) {
//     olderUser = array[index];
//   }
//   return olderUser;
// }, []);

const olderUsers = users.reduce((acc, init) => {
  let olderUser = acc;
  if (init.idade > olderUser.idade) {
    olderUser = init;
  }
  return olderUser;
});

console.log(olderUsers);
