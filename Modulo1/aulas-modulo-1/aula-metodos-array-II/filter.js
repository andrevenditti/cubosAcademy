const number = [1, 2, 3, 4, 5, 6];

const novoArray = number.filter((element) => {
  return element % 2 === 0;
});

console.log(novoArray); // [2, 4, 6]
