const finalCopa = new Date(2002, 5, 30, 8);

const firstRound = +finalCopa + 1000 * 60 * (45 + 15 + 22);
const secondRound = +finalCopa + 1000 * 60 * (45 + 15 + 34);

const primeirGol = new Date(firstRound);
const segundoGol = new Date(secondRound);

console.log(primeirGol);
console.log(segundoGol);
